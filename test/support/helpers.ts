import FS from 'fs/promises'
import Path from 'path'
import { CodeEdit, Location, TextSpan } from 'typescript/lib/protocol'
import {
  Position,
  TextDocument,
  TextEdit,
} from 'vscode-languageserver-textdocument'
import { URI } from 'vscode-uri'

export function locationToPosition(loc: Location): Position {
  return { line: loc.line - 1, character: loc.offset - 1 }
}

export function codeEditToTextEdit(edit: CodeEdit): TextEdit {
  return {
    range: {
      start: locationToPosition(edit.start),
      end: locationToPosition(edit.end),
    },
    newText: edit.newText,
  }
}

export async function findEOFPosition(
  file: string,
): Promise<{ file: string; line: number; offset: number }> {
  const document = await getTextDocument(file)
  const position = document.positionAt(document.getText().length)

  return {
    file,
    line: position.line + 1,
    offset: position.character + 1,
  }
}
export async function findPositionOrThrowIn(
  file: string,
  text: string,
  offset: number = 0,
): Promise<{ file: string; line: number; offset: number }> {
  const position = await findPositionIn(file, text, offset)
  if (position == null) throw new Error(`"${text}" not found in "${file}"`)

  return position
}
export async function findPositionIn(
  file: string,
  text: string,
  offset: number = 0,
): Promise<{ file: string; line: number; offset: number } | undefined> {
  const document = await getTextDocument(file)
  const index = document.getText().indexOf(text)

  if (index >= 0) {
    const position = document.positionAt(index + offset)
    const loc = toLoc(position)

    return {
      file,
      ...loc,
    }
  }
}

function toLoc(position: Position): Location {
  return {
    line: position.line + 1,
    offset: position.character + 1,
  }
}

export async function findAllPositionsIn(
  file: string,
  text: string,
): Promise<TextSpan[]> {
  const document = await getTextDocument(file)
  const content = document.getText()
  const pos: TextSpan[] = []

  let index: number = 0
  while ((index = content.indexOf(text, index + text.length)) >= 0) {
    pos.push({
      start: toLoc(document.positionAt(index)),
      end: toLoc(document.positionAt(index + text.length)),
    })
  }

  return pos
}

const cache = new Map<string, TextDocument>()

export async function getTextDocument(file: string): Promise<TextDocument> {
  return cache.get(file) ?? (await createTextDocument(file))
}

async function createTextDocument(file: string): Promise<TextDocument> {
  const content = await FS.readFile(file, { encoding: 'utf-8' })
  const document = TextDocument.create(
    URI.file(file).toString(),
    Path.posix.extname(file),
    0,
    content,
  )

  cache.set(file, document)

  return document
}

export function toNormalizedPath(fileName: string): string {
  const fsPath = URI.file(fileName).fsPath
  return fsPath.replace(/\\/g, '/')
}

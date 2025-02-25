<div align="center" style="text-align: center; margin-bottom: 72px">
  <img src="./logo.png" width="144" style="margin-top: 72px; margin-bottom: 16px" />
  <h1>Template AST Helpers</h1>
  <p>A collection of utility functions for Vue template AST traversal, transformation, assertion and creation.</p>
</div>

## Support

This package is part of [VueDX project](https://github.com/znck/vue-developer-experience), maintained by [Rahul Kadyan](https://github.com/znck). You can [💖 sponsor him](https://github.com/sponsors/znck) for continued development of this package and other VueDX tools.

## Usage

```
npm add @vuedx/template-ast-types
```
<!-- #region API-DOCS -->
<!-- Do not edit this file. It is a report generated by [scripts/docgen.js](https://github.com/znck/vue-developer-experience/tree/master/scripts/docgen.js). -->

## API


<a href="#-vuedx-template-ast-types-createSimpleExpression-function-1-" id="-vuedx-template-ast-types-createSimpleExpression-function-1-"></a>

### [createSimpleExpression](#-vuedx-template-ast-types-createSimpleExpression-function-1-)

Create AST Node

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function createSimpleExpression(content: SimpleExpressionNode['content'], isStatic: SimpleExpressionNode['isStatic'], loc?: SourceLocation, isConstant?: boolean): SimpleExpressionNode;
```

| Parameter | Type | Description |
| --- | --- | --- |
| content | <code><a href="#-vue-compiler-core-SimpleExpressionNode-interface">SimpleExpressionNode</a>['content']</code> | - |
| isStatic | <code><a href="#-vue-compiler-core-SimpleExpressionNode-interface">SimpleExpressionNode</a>['isStatic']</code> | - |
| loc | <code><a href="#-vue-compiler-core-SourceLocation-interface">SourceLocation</a></code> | - |
| isConstant | <code>boolean</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-findParentNode-function-1-" id="-vuedx-template-ast-types-findParentNode-function-1-"></a>

### [findParentNode](#-vuedx-template-ast-types-findParentNode-function-1-)

Find the parent element node.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function findParentNode(ast: RootNode, node: Node): ElementNode | undefined;
```

| Parameter | Type | Description |
| --- | --- | --- |
| ast | <code><a href="#-vue-compiler-core-RootNode-interface">RootNode</a></code> | - |
| node | <code><a href="#-vue-compiler-core--Node-2-interface">Node</a></code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-findTemplateChildNodeAt-function-1-" id="-vuedx-template-ast-types-findTemplateChildNodeAt-function-1-"></a>

### [findTemplateChildNodeAt](#-vuedx-template-ast-types-findTemplateChildNodeAt-function-1-)

Find a child (element, component, text, interpolation, or comment) node containing the given position.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function findTemplateChildNodeAt(ast: RootNode, position: number, mode?: 'start' | 'end'): SearchResult;
```

| Parameter | Type | Description |
| --- | --- | --- |
| ast | <code><a href="#-vue-compiler-core-RootNode-interface">RootNode</a></code> | - |
| position | <code>number</code> | - |
| mode | <code>'start' &#124; 'end'</code> | Open/close range comparison mode: • undefined - position in [start, end] • 'start' — position in [start, end) • 'end' - position in (start, end] |

</details>
<br>

<a href="#-vuedx-template-ast-types-findTemplateChildrenInRange-function-1-" id="-vuedx-template-ast-types-findTemplateChildrenInRange-function-1-"></a>

### [findTemplateChildrenInRange](#-vuedx-template-ast-types-findTemplateChildrenInRange-function-1-)

Get all child (element, component, text, interpolation, or comment) nodes contained in given range. (partial overlaps are ignored)

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function findTemplateChildrenInRange(ast: RootNode, start: number, end: number): Node[];
```

| Parameter | Type | Description |
| --- | --- | --- |
| ast | <code><a href="#-vue-compiler-core-RootNode-interface">RootNode</a></code> | - |
| start | <code>number</code> | - |
| end | <code>number</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-findTemplateNodeAt-function-1-" id="-vuedx-template-ast-types-findTemplateNodeAt-function-1-"></a>

### [findTemplateNodeAt](#-vuedx-template-ast-types-findTemplateNodeAt-function-1-)

Find the deepest node containing the given position.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function findTemplateNodeAt(ast: RootNode, position: number): SearchResult;
```

| Parameter | Type | Description |
| --- | --- | --- |
| ast | <code><a href="#-vue-compiler-core-RootNode-interface">RootNode</a></code> | - |
| position | <code>number</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-findTemplateNodeInRange-function-1-" id="-vuedx-template-ast-types-findTemplateNodeInRange-function-1-"></a>

### [findTemplateNodeInRange](#-vuedx-template-ast-types-findTemplateNodeInRange-function-1-)

Find the deepest node containing the given position.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function findTemplateNodeInRange(ast: RootNode, start: number, end: number, mode?: 'start' | 'end'): SearchResult;
```

| Parameter | Type | Description |
| --- | --- | --- |
| ast | <code><a href="#-vue-compiler-core-RootNode-interface">RootNode</a></code> | - |
| start | <code>number</code> | - |
| end | <code>number</code> | - |
| mode | <code>'start' &#124; 'end'</code> | Open/close range comparison mode: • undefined - position in [start, end] • 'start' — position in [start, end) • 'end' - position in (start, end] |

</details>
<br>

<a href="#-vuedx-template-ast-types-findTemplateNodesInRange-function-1-" id="-vuedx-template-ast-types-findTemplateNodesInRange-function-1-"></a>

### [findTemplateNodesInRange](#-vuedx-template-ast-types-findTemplateNodesInRange-function-1-)

Get all nodes contained in given range. (partial overlaps are ignored)

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function findTemplateNodesInRange(ast: RootNode, start: number, end: number): Node[];
```

| Parameter | Type | Description |
| --- | --- | --- |
| ast | <code><a href="#-vue-compiler-core-RootNode-interface">RootNode</a></code> | - |
| start | <code>number</code> | - |
| end | <code>number</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-isAttributeNode-function-1-" id="-vuedx-template-ast-types-isAttributeNode-function-1-"></a>

### [isAttributeNode](#-vuedx-template-ast-types-isAttributeNode-function-1-)

Checks if it is an AST AttributeNode.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function isAttributeNode(node: unknown): node is AttributeNode;
```

| Parameter | Type | Description |
| --- | --- | --- |
| node | <code>unknown</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-isCommentNode-function-1-" id="-vuedx-template-ast-types-isCommentNode-function-1-"></a>

### [isCommentNode](#-vuedx-template-ast-types-isCommentNode-function-1-)

Checks if it is an AST CommentNode.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function isCommentNode(node: unknown): node is CommentNode;
```

| Parameter | Type | Description |
| --- | --- | --- |
| node | <code>unknown</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-isComponentNode-function-1-" id="-vuedx-template-ast-types-isComponentNode-function-1-"></a>

### [isComponentNode](#-vuedx-template-ast-types-isComponentNode-function-1-)

Checks if it is an AST ComponentNode.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function isComponentNode(node: unknown): node is ComponentNode;
```

| Parameter | Type | Description |
| --- | --- | --- |
| node | <code>unknown</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-isDirectiveNode-function-1-" id="-vuedx-template-ast-types-isDirectiveNode-function-1-"></a>

### [isDirectiveNode](#-vuedx-template-ast-types-isDirectiveNode-function-1-)

Checks if it is an AST DirectiveNode.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function isDirectiveNode(node: unknown): node is DirectiveNode;
```

| Parameter | Type | Description |
| --- | --- | --- |
| node | <code>unknown</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-isElementNode-function-1-" id="-vuedx-template-ast-types-isElementNode-function-1-"></a>

### [isElementNode](#-vuedx-template-ast-types-isElementNode-function-1-)

Checks if it is an AST ElementNode.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function isElementNode(node: unknown): node is ElementNode;
```

| Parameter | Type | Description |
| --- | --- | --- |
| node | <code>unknown</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-isInterpolationNode-function-1-" id="-vuedx-template-ast-types-isInterpolationNode-function-1-"></a>

### [isInterpolationNode](#-vuedx-template-ast-types-isInterpolationNode-function-1-)

Checks if it is an AST InterpolationNode.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function isInterpolationNode(node: unknown): node is InterpolationNode;
```

| Parameter | Type | Description |
| --- | --- | --- |
| node | <code>unknown</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-isNode-function-1-" id="-vuedx-template-ast-types-isNode-function-1-"></a>

### [isNode](#-vuedx-template-ast-types-isNode-function-1-)

Checks if it is Vue template AST Node.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function isNode(node: unknown): node is Node;
```

| Parameter | Type | Description |
| --- | --- | --- |
| node | <code>unknown</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-isPlainElementNode-function-1-" id="-vuedx-template-ast-types-isPlainElementNode-function-1-"></a>

### [isPlainElementNode](#-vuedx-template-ast-types-isPlainElementNode-function-1-)

Checks if it is an AST PlainElementNode.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function isPlainElementNode(node: unknown): node is PlainElementNode;
```

| Parameter | Type | Description |
| --- | --- | --- |
| node | <code>unknown</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-isRootNode-function-1-" id="-vuedx-template-ast-types-isRootNode-function-1-"></a>

### [isRootNode](#-vuedx-template-ast-types-isRootNode-function-1-)

Checks if it is an AST RootNode.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function isRootNode(node: unknown): node is RootNode;
```

| Parameter | Type | Description |
| --- | --- | --- |
| node | <code>unknown</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-isSimpleExpressionNode-function-1-" id="-vuedx-template-ast-types-isSimpleExpressionNode-function-1-"></a>

### [isSimpleExpressionNode](#-vuedx-template-ast-types-isSimpleExpressionNode-function-1-)

Checks if it is an AST ExpressionNode.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function isSimpleExpressionNode(node: unknown): node is SimpleExpressionNode;
```

| Parameter | Type | Description |
| --- | --- | --- |
| node | <code>unknown</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-isSimpleIdentifier-function-1-" id="-vuedx-template-ast-types-isSimpleIdentifier-function-1-"></a>

### [isSimpleIdentifier](#-vuedx-template-ast-types-isSimpleIdentifier-function-1-)

Checks if it is a valid JavaScript identifers.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function isSimpleIdentifier(content: string): boolean;
```

| Parameter | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-isTemplateNode-function-1-" id="-vuedx-template-ast-types-isTemplateNode-function-1-"></a>

### [isTemplateNode](#-vuedx-template-ast-types-isTemplateNode-function-1-)

Checks if it is an AST TemplateNode.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function isTemplateNode(node: unknown): node is TemplateNode;
```

| Parameter | Type | Description |
| --- | --- | --- |
| node | <code>unknown</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-isTextNode-function-1-" id="-vuedx-template-ast-types-isTextNode-function-1-"></a>

### [isTextNode](#-vuedx-template-ast-types-isTextNode-function-1-)

Checks if it is an AST TextNode.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function isTextNode(node: unknown): node is TextNode;
```

| Parameter | Type | Description |
| --- | --- | --- |
| node | <code>unknown</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-stringify-function-1-" id="-vuedx-template-ast-types-stringify-function-1-"></a>

### [stringify](#-vuedx-template-ast-types-stringify-function-1-)

Convert template AST to template code.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function stringify(node: Node | Node[], options?: Partial<StringifyOptions>): string;
```

| Parameter | Type | Description |
| --- | --- | --- |
| node | <code><a href="#-vue-compiler-core--Node-2-interface">Node</a> &#124; <a href="#-vue-compiler-core--Node-2-interface">Node</a>[]</code> | - |
| options | <code><a href="#-Partial-type">Partial</a><<a href="#-vuedx-template-ast-types--StringifyOptions-interface">StringifyOptions</a>></code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-traverse-function-1-" id="-vuedx-template-ast-types-traverse-function-1-"></a>

### [traverse](#-vuedx-template-ast-types-traverse-function-1-)

A general AST traversal utility with both prefix and postfix handlers, and a state object. Exposes ancestry data to each handler so that more complex AST data can be taken into account.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function traverse<T>(node: Node, handlers: TraversalHandler<T> | TraversalHandlers<T>, state?: T): void;
```

| Parameter | Type | Description |
| --- | --- | --- |
| node | <code><a href="#-vue-compiler-core--Node-2-interface">Node</a></code> | - |
| handlers | <code><a href="#-vuedx-template-ast-types--TraversalHandler-type">TraversalHandler</a><T> &#124; <a href="#-vuedx-template-ast-types--TraversalHandlers-interface">TraversalHandlers</a><T></code> | - |
| state | <code>T</code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-traverseEvery-function-1-" id="-vuedx-template-ast-types-traverseEvery-function-1-"></a>

### [traverseEvery](#-vuedx-template-ast-types-traverseEvery-function-1-)

An abortable AST traversal utility. Return false (or falsy value) to stop traversal.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function traverseEvery<T>(node: Node, enter: (node: Node, ancestors: TraversalAncestors, state: T) => boolean, state?: any, ancestors?: TraversalAncestors): void;
```

| Parameter | Type | Description |
| --- | --- | --- |
| node | <code><a href="#-vue-compiler-core--Node-2-interface">Node</a></code> | - |
| enter | <code>(node: <a href="#-vue-compiler-core--Node-2-interface">Node</a>, ancestors: <a href="#-vuedx-template-ast-types--TraversalAncestors-type">TraversalAncestors</a>, state: T) => boolean</code> | - |
| state | <code>any</code> | - |
| ancestors | <code><a href="#-vuedx-template-ast-types--TraversalAncestors-type">TraversalAncestors</a></code> | - |

</details>
<br>

<a href="#-vuedx-template-ast-types-traverseFast-function-1-" id="-vuedx-template-ast-types-traverseFast-function-1-"></a>

### [traverseFast](#-vuedx-template-ast-types-traverseFast-function-1-)

A faster AST traversal utility. It behaves same as [traverse()] but there is no ancestory data.

<details>
<summary>More info</summary>

**Signature:**
```ts
declare function traverseFast<T = any>(node: object, enter: (node: Node, state: T, stop: () => void) => void, state?: T): void;
```

| Parameter | Type | Description |
| --- | --- | --- |
| node | <code>object</code> | - |
| enter | <code>(node: <a href="#-vue-compiler-core--Node-2-interface">Node</a>, state: T, stop: () => void) => void</code> | - |
| state | <code>T</code> | - |

</details>
<br>

## Types


<a href="#-vuedx-template-ast-types-SearchResult-interface" id="-vuedx-template-ast-types-SearchResult-interface"></a>

### [SearchResult](#-vuedx-template-ast-types-SearchResult-interface)



```ts
interface SearchResult {
  ancestors: TraversalAncestors;
  node: Node | null;
}
```


<br>

<a href="#-vuedx-template-ast-types-StringifyOptions-interface" id="-vuedx-template-ast-types-StringifyOptions-interface"></a>

### [StringifyOptions](#-vuedx-template-ast-types-StringifyOptions-interface)



```ts
interface StringifyOptions {
  directive: 'shorthand' | 'longhand';
  indent: number;
  initialIndent: number;
  replaceNodes: Map<Node, Node | null>;
}
```


<br>

<a href="#-vuedx-template-ast-types-TraversalHandlers-interface" id="-vuedx-template-ast-types-TraversalHandlers-interface"></a>

### [TraversalHandlers](#-vuedx-template-ast-types-TraversalHandlers-interface)



```ts
interface TraversalHandlers<T> {
  enter?: TraversalHandler<T>;
  exit?: TraversalHandler<T>;
}
```


<br>
<!-- #region API-DOCS -->

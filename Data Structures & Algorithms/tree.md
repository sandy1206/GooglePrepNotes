# Tree Data Structures

## Table of Contents
1. [Binary Trees](#binary-trees)
2. [Binary Search Trees](#binary-search-trees)
3. [AVL Trees](#avl-trees)
4. [Red-Black Trees](#red-black-trees)
5. [Segment Trees](#segment-trees)
6. [Fenwick (Binary Indexed) Trees](#fenwick-binary-indexed-trees)
7. [Trie (Prefix Tree)](#trie-prefix-tree)

---

## Binary Trees

### Introduction
A binary tree is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child.

### Properties
- **Height**: The length of the longest path from the root to a leaf.
- **Depth**: The length of the path from the root to a given node.
- **Full Binary Tree**: Every node has either 0 or 2 children.
- **Complete Binary Tree**: All levels are completely filled except possibly the last, which is filled from left to right.

### Operations
- **Insertion**
- **Deletion**
- **Traversal** (In-order, Pre-order, Post-order, Level-order)

### Code Examples
#### Binary Tree Implementation
```js
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            if (!node.left) {
                node.left = newNode;
                return;
            } else {
                queue.push(node.left);
            }
            if (!node.right) {
                node.right = newNode;
                return;
            } else {
                queue.push(node.right);
            }
        }
    }

}
```

* * * * *

## Binary Search Trees

### Introduction

A binary search tree (BST) is a binary tree where each node has a key, and every node's key is:

-   Greater than all keys in its left subtree.
-   Less than all keys in its right subtree.

### Operations

-   **Insertion**
-   **Deletion**
-   **Search**
-   **Traversal** (In-order, Pre-order, Post-order)

### Code Examples

#### Binary Search Tree Implementation

```js

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }

    search(value) {
        let currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            }
            currentNode = value < currentNode.value ? currentNode.left : currentNode.right;
        }
        return false;
    }

}
```
* * * * *

## AVL Trees

### Introduction

An AVL tree is a self-balancing binary search tree where the difference between the heights of left and right subtrees cannot be more than one for all nodes.

### Operations

-   **Insertion**
-   **Deletion**
-   **Search**
-   **Traversal**

### Code Examples

#### AVL Tree Implementation

```js

class AVLNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    getHeight(node) {
        if (!node) return 0;
        return node.height;
    }

    getBalanceFactor(node) {
        if (!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    rightRotate(y) {
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        return x;
    }

    leftRotate(x) {
        const y = x.right;
        const T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        return y;
    }

    insert(node, value) {
        if (!node) return new AVLNode(value);

        if (value < node.value) {
            node.left = this.insert(node.left, value);
        } else if (value > node.value) {
            node.right = this.insert(node.right, value);
        } else {
            return node;
        }

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        const balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor > 1) {
            if (value < node.left.value) {
                return this.rightRotate(node);
            } else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }

        if (balanceFactor < -1) {
            if (value > node.right.value) {
                return this.leftRotate(node);
            } else {
                node.right = this.rightRotate(node.right);
                return this.leftRotate(node);
            }
        }

        return node;
    }

}
```
* * * * *

## Red-Black Trees

### Introduction

A red-black tree is a self-balancing binary search tree where each node has an extra bit for denoting the color of the node, either red or black. The tree maintains balance through rotation and recoloring.

### Properties

-   Each node is either red or black.
-   The root is always black.
-   All leaves (NIL nodes) are black.
-   Red nodes cannot have red children (no two red nodes can be adjacent).
-   Every path from a node to its descendant NIL nodes has the same number of black nodes.

### Operations

-   **Insertion**
-   **Deletion**
-   **Search**
-   **Traversal**

### Code Examples

#### Red-Black Tree Implementation

```js
const RED = true;
const BLACK = false;

class RedBlackNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.color = RED;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    rotateLeft(h) {
        let x = h.right;
        h.right = x.left;
        x.left = h;
        x.color = h.color;
        h.color = RED;
        return x;
    }

    rotateRight(h) {
        let x = h.left;
        h.left = x.right;
        x.right = h;
        x.color = h.color;
        h.color = RED;
        return x;
    }

    flipColors(h) {
        h.color = RED;
        h.left.color = BLACK;
        h.right.color = BLACK;
    }

    isRed(node) {
        if (!node) return false;
        return node.color === RED;
    }

    insert(node, value) {
        if (!node) return new RedBlackNode(value);

        if (value < node.value) node.left = this.insert(node.left, value);
        else if (value > node.value) node.right = this.insert(node.right, value);

        if (this.isRed(node.right) && !this.isRed(node.left)) node = this.rotateLeft(node);
        if (this.isRed(node.left) && this.isRed(node.left.left)) node = this.rotateRight(node);
        if (this.isRed(node.left) && this.isRed(node.right)) this.flipColors(node);

        return node;
    }

}
```

* * * * *

## Segment Trees


### Introduction

A segment tree is a data structure used for storing intervals or segments. It allows querying which of the stored segments contain a given point.

### Operations

-   **Build**
-   **Update**
-   **Range Query**

### Code Examples

#### Segment Tree Implementation

```js
class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(4 * this.n);
        this.build(arr, 0, 0, this.n - 1);
    }

    build(arr, node, start, end) {
        if (start === end) {
            this.tree[node] = arr[start];
        } else {
            let mid = Math.floor((start + end) / 2);
            let leftChild = 2 * node + 1;
            let rightChild = 2 * node + 2;
            this.build(arr, leftChild, start, mid);
            this.build(arr, rightChild, mid + 1, end);
            this.tree[node] = this.tree[leftChild] + this.tree[rightChild];
        }
    }

    update(index, value, node, start, end) {
        if (start === end) {
            this.tree[node] = value;
        } else {
            let mid = Math.floor((start + end) / 2);
            let leftChild = 2 * node + 1;
            let rightChild = 2 * node + 2;
            if (index <= mid) {
                this.update(index, value, leftChild, start, mid);
            } else {
                this.update(index, value, rightChild, mid + 1, end);
            }
            this.tree[node] = this.tree[leftChild] + this.tree[rightChild];
        }
    }

    query(L, R, node, start, end) {
        if (R < start || L > end) return 0;
        if (L <= start && end <= R) return this.tree[node];

        let mid = Math.floor((start + end) / 2);
        let leftChild = 2 * node + 1;
        let rightChild = 2 * node + 2;
        let leftSum = this.query(L, R, leftChild, start, mid);
        let rightSum = this.query(L, R, rightChild, mid + 1, end);
        return leftSum + rightSum;
    }
}
```

* * * * *

## Fenwick (Binary Indexed) Trees

### Introduction

A Fenwick Tree or Binary Indexed Tree is a data structure that provides efficient methods for dynamic cumulative frequency tables or cumulative sums.

### Operations

-   **Update**
-   **Query**

### Code Examples

#### Fenwick Tree Implementation

```js
class FenwickTree {
    constructor(size) {
        this.size = size;
        this.tree = new Array(size + 1).fill(0);
    }

    update(index, value) {
        while (index <= this.size) {
            this.tree[index] += value;
            index += index & -index;
        }
    }

    query(index) {
        let sum = 0;
        while (index > 0) {
            sum += this.tree[index];
            index -= index & -index;
        }
        return sum;
    }
}
```

* * * * *

## Trie (Prefix Tree)

### Introduction

A Trie is a tree-like data structure used to store a dynamic set of strings, where the keys are usually strings.

### Properties

-   **Each node represents a single character.**
-   **The root represents an empty string.**
-   **Common prefixes are shared among strings.**

### Operations

-   **Insert**
-   **Search**
-   **Delete**

### Code Examples

#### Trie Implementation

```js
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    delete(word) {
        const deleteRecursively = (node, word, index) => {
            if (index === word.length) {
                if (!node.isEndOfWord) return false;
                node.isEndOfWord = false;
                return Object.keys(node.children).length === 0;
            }

            const char = word[index];
            if (!node.children[char]) return false;

            const shouldDeleteChild = deleteRecursively(node.children[char], word, index + 1);
            if (shouldDeleteChild) {
                delete node.children[char];
                return Object.keys(node.children).length === 0;
            }
            return false;
        };

        deleteRecursively(this.root, word, 0);
    }
}
```

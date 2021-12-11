class _Node {
  public left: _Node = null
  public right: _Node = null

  constructor(public value: number) {
    this.value = value
  }
}

class BinarySearchTree {
  private root: _Node = null
  constructor() {}

  add(data: number) {
    let node = this.root

    if (node === null) {
      this.root = new _Node(data)
    } else {
      while (node) {
        if (data < node.value) {
          if (node.left === null) {
            node.left = new _Node(data)
            return
          }

          node = node.left
        } else if (data > node.value) {
          if (node.right === null) {
            node.right = new _Node(data)
            return
          }

          node = node.right
        } else {
          return
        }
      }
    }
  }

  search(value: number) {
    let node = this.root

    while (node) {
      if (node.value === value) {
        return node
      }

      if (value < node.value) {
        node = node.left
      } else {
        node = node.right
      }
    }
  }

  isEmpty(): boolean {
    return this.root === null
  }

  findMin() {
    let node = this.root
    while (node.left !== null) {
      node = node.left
    }
    return node
  }

  findMax() {
    let node = this.root
    while (node.right !== null) {
      node = node.right
    }
    return node
  }

  has(data: number) {
    let node = this.root

    while (node) {
      if (node.value === data) {
        return true
      }
      if (data < node.value) {
        node = node.left
      } else {
        node = node.right
      }
    }
    return false
  }

  remove(data: number) {
    const removeNode = (node: _Node, data: number): any => {
      if (node === null) {
        return null
      }

      if (data === node.value) {
        if (node.left === null && node.right === null) {
          return null
        }

        if (node.left === null) {
          return node.right
        }

        if (node.right === null) {
          return node.left
        }

        // node has two children
        let tmp = node.right

        while (tmp.left !== null) {
          tmp = node.left
        }

        node.value = tmp.value
        node.right = removeNode(node.right, data)
        return node
      } else if (data < node.value) {
        node.left = removeNode(node.left, data)
        return node
      } else if (data > node.value) {
        node.right = removeNode(node.right, data)
        return node
      }
    }

    this.root = removeNode(this.root, data)
  }
}

const bst = new BinarySearchTree()

/**
 *                  8
 *               /     \
 *             3        10
 *           /  \         \
 *          1    6         14
 *             /  \      /   \
 *            4    7    13   99
 *
 */

bst.add(8)
bst.add(3)
bst.add(10)
bst.add(6)
bst.add(14)
bst.add(13)
bst.add(7)
bst.add(4)
bst.add(1)
bst.add(99)

console.log('Node: ', bst.search(7)?.value)
console.log('Node: ', bst.search(14)?.value)
console.log('Node: ', bst.search(99)?.value)
console.log('Node: ', bst.search(6)?.value)

console.log('min: ', bst.findMin().value)
console.log('max: ', bst.findMax().value)

console.log('has: ', bst.has(4))
console.log('has: ', bst.has(7))
console.log('has: ', bst.has(14))
console.log('has: ', bst.has(1))
console.log('has: ', bst.has(10))
console.log('has: ', bst.has(87))
console.log('has: ', bst.has(33))

console.log('remove: ', bst.remove(1))
console.log('remove: ', bst.remove(10))
console.log('remove: ', bst.remove(99))

console.log('has: ', bst.has(1))
console.log('has: ', bst.has(10))
console.log('has: ', bst.has(99))

console.log('min: ', bst.findMin()?.value)
console.log('max: ', bst.findMax()?.value)

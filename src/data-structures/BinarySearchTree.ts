class _Node {
    public left: _Node = null;
    public right: _Node = null;
  
    constructor(public value: number) {
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    private root: _Node = null;
    constructor() {}
  
    add(data: number) {
      let node = this.root;
  
      if (node === null) {
        this.root = new _Node(data);
      } else {
        while (node) {
          if (data < node.value) {
            if (node.left === null) {
              node.left = new _Node(data);
              return;
            }
  
            node = node.left;
          } else {
            if (node.right === null) {
              node.right = new _Node(data);
              return;
            }
  
            node = node.right;
          }
        }
      }
    }
  
    search(value:number) {
      let node = this.root;
  
      while (node) {
        if (node.value === value) {
          return node;
        }
  
        if (value < node.value) {
          node = node.left;
        } else {
          node = node.right;
        }
      }
    }
  
    isEmpty(): boolean {
      return this.root === null;
    }
  }
  
  const bst = new BinarySearchTree();
  
  /**
   *                  8
   *               /     \
   *             3        10
   *           /  \         \
   *          4    6         14
   *         /      \      /
   *        1       7     13
   *
   */
  
  bst.add(8);
  bst.add(3);
  bst.add(10);
  bst.add(6);
  bst.add(14);
  bst.add(13);
  bst.add(7);
  bst.add(4);
  bst.add(1);
  
  const node7 = bst.search(7);
  const node13 = bst.search(13);
  const nodeRoot = bst.search(8);
  const node14 = bst.search(14);
  
  console.log(bst);
  
  console.log(node7);
  console.log(node13);
  console.log(nodeRoot);
  console.log(node14);
  
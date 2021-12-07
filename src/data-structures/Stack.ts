class Stack {
  private count: number;
  private storage: any;

  constructor() {
    this.count = 0;
    this.storage = {};
  }

  /**
   * return push items to the stack
   */
  push(value: any) {
    this.storage[this.count] = value;
    this.count++;
  }

  /**
   * return remove job from the stack by LIFO methodology (Last-In-First-Out)
   */
  pop() {
    if (this.count === 0) return undefined;

    this.count--;
    const deletedItem = this.storage[this.count];
    delete this.storage[this.count];
    return deletedItem;
  }

  size() {
    return this.count;
  }

  /**
   * return the last job of the stack
   */
  peek() {
    return this.storage[this.count - 1];
  }
}

const stack = new Stack();

stack.push(() => "job 1");
stack.push(() => "job 2");
stack.push(() => "job 3");
stack.push(() => "job 4");
stack.push(() => "job 5");

stack.pop();

console.log(stack.peek()());

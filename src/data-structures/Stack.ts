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
   * Remove the last item from the stack by
   * LIFO Methodology (Last in First Out)
   * @returns the last element in the stack
   *
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
   * LIFO Methodology (Last in First Out)
   * @returns the last element in the stack
   *
   */
  peek() {
    return this.storage[this.count - 1];
  }
}

const stack = new Stack();

stack.push(() => "task 1");
stack.push(() => "task 2");
stack.push(() => "task 3");
stack.push(() => "task 4");
stack.push(() => "task 5");

stack.pop();

console.log(stack.peek()());

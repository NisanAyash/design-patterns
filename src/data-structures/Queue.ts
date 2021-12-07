interface IQueue {
  enqueue(item: any): void;
}

class Queue implements IQueue {
  private collection: any = [];

  constructor() {}

  enqueue(item: any) {
    this.collection.push(item);
  }

  /**
   * Delete the first element by
   * FIFO Methodology (First in First Out)
   * @returns the first element in the queue
   */
  dequeue() {
    return this.collection.shift();
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  /**
   * FIFO Methodology (First in First Out)
   * @returns the first element in the queue
   * @if `empty` return `undefined`

   */
  peek() {
    return this.collection[0];
  }
}

const queue = new Queue();

const item1 = () => "item1";
const item2 = () => "item2";
const item3 = () => "item3";
const item4 = () => "item4";
const item5 = () => "item5";

queue.enqueue(item1);
queue.enqueue(item2);
queue.enqueue(item3);
queue.enqueue(item4);
queue.enqueue(item5);

queue.dequeue();

console.log(queue.peek());

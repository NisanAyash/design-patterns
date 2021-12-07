interface IQueue {
  enqueue(item: any, priority: any): void;
}

class PriorityQueue implements IQueue {
  private collection: any = [];

  constructor() {}

  enqueue(item: any, priority: number) {
    const queueElement = { element: item, priority };
    let added = false;

    if (this.isEmpty()) {
      this.collection.push(queueElement);
    } else {
      for (let i = 0; i < this.collection.length; i++) {
        if (this.collection[i].priority > priority) {
          this.collection.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }

      if (!added) {
        this.collection.push(queueElement);
      }
    }
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

const queue = new PriorityQueue();

const item1 = () => "item1";
const item2 = () => "item2";
const item3 = () => "item3";
const item4 = () => "item4";
const item5 = () => "item5";

queue.enqueue(item1, 3);
queue.enqueue(item2, 1);
queue.enqueue(item3, 2);
queue.enqueue(item4, 5);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

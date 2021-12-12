class NODE {
    public value: number
    public next: NODE | null

    constructor(value: number) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    private head: NODE | null
    private length: number

    constructor() {
        this.head = null
        this.length = 0
    }

    size() {
        return this.length
    }

    getHead() {
        return this.head
    }

    isEmpty() {
        return this.length === 0
    }

    add(value: number) {
        if (this.isEmpty()) {
            this.head = new NODE(value)
            this.length = this.length + 1
        } else {
            let node = this.head

            while (node.next) {
                node = node.next
            }

            node.next = new NODE(value)
            this.length = this.length + 1
        }
    }

    print() {
        let node = this.head

        while (node) {
            console.log("print method: ", node.value)
            node = node.next
        }
    }

    remove(element: number) {
        let currentNode = this.head
        let prevNode = null

        if (currentNode.value === element) {
            this.head = currentNode.next
        } else {
            while (currentNode.value !== element) {
                prevNode = currentNode
                currentNode = currentNode.next
            }

            prevNode.next = currentNode.next
            this.length = this.length - 1
        }
    }

    indexOf(element: number) {
        let node = this.head
        let index = 0

        while (node) {
            if (node.value === element) {
                return index
            }

            node = node.next
            index++
        }

        return -1
    }

    elementAt(index:number){
        let  node = this.head;
        let count = 0;
    
        
        while(count < index) {
            node = node.next
            count+=1;
        }

        return node;
    }

    addAt(index:number, element:number){
        let currentNode = this.head;
        let prevNode = null;
        let countIndex = 0;

        if(index > this.size()){
            return false;
        }

        const newNode = new NODE(element);

        if(index === 0){
            newNode.next = currentNode;
            this.head = newNode;
        }else {
            
            while(countIndex < index){
                countIndex++;
                prevNode = currentNode;
                currentNode = currentNode.next;
            }

            newNode.next = currentNode;
            prevNode.next = newNode;
        }

        this.length = this.length + 1;
    }

    removeAt(index:number){
        let currentNode = this.head;
        let prevNode = null;
        let countIndex = 0;

        if(index < 0 || index >= this.length){
            return false
        }

        if(index === 0){
            currentNode = currentNode.next;
        }else {
            while(countIndex < index){
                prevNode = currentNode
                currentNode = currentNode.next
                countIndex++;
            }

            prevNode.next = currentNode.next;
        }
        this.length = this.length + 1;
    }
}

const linkedList = new LinkedList();

    [12, 15, 99, 11, 5, 3, 66, 22].forEach((elem) => {
        linkedList.add(elem)
    })

linkedList.remove(3)
linkedList.remove(99)

console.log("index of: ", linkedList.indexOf(99)) 
console.log("index of: ", linkedList.indexOf(66)) 

console.log("element at: ", linkedList.elementAt(3))

linkedList.addAt(2, 14);

linkedList.removeAt(4)
linkedList.print()

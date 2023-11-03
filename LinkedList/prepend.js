//Output ====>       21 --> 1 --> 10
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
    };
    this.head=newNode;
    this.length++;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.prepend(1);
myLinkedList.prepend(21);
console.log(myLinkedList);

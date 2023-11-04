class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
}

const myLinkedList = new DoublyLinkedList(10)

console.log(myLinkedList);

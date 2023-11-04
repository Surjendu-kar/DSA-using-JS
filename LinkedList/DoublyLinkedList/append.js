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
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next=newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);

console.log(myLinkedList);

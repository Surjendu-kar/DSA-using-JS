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
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this.printList();
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this.printList();
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };

    const leader = this.traverseToIndex(index - 1);
    const leaderNextNode = leader.next;
    newNode.next = leaderNextNode;
    leaderNextNode.prev = newNode;
    leader.next = newNode;
    newNode.prev = leader;
    this.length++;

    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const deleteNode = leader.next;
    const nextNode = deleteNode.next;

    leader.next = nextNode;
    nextNode.prev = leader;
    this.length--;
    return this.printList();
  }
  printList() {
    // O(n)
    const arr1 = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr1.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr1;
  }
  reverseList() {
    // O(n)
    const arr2 = [];
    let currentNode = this.tail;

    while (currentNode !== null) {
      arr2.push(currentNode.value);
      currentNode = currentNode.prev;
    }
    return arr2;
  }
}

const myLinkedList = new DoublyLinkedList(10);
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.append(20))
console.log(myLinkedList.append(30));
console.log(myLinkedList.insert(1,5));

console.log(myLinkedList);
console.log(myLinkedList.printList());
console.log(myLinkedList.remove(1));
console.log(myLinkedList.reverseList());


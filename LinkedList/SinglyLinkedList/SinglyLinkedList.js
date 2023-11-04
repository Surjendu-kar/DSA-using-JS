//Output ====>       7 --> 5 --> 16
class SinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // O(1)
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }
  prepend(value) {
    // O(1)
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this.printList();
  }
  insert(index, value) {
    //O(n)
    if (index === 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    newNode.next = leader.next;
    leader.next = newNode;
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
    if (index === 0) {
      const deletenode = this.head;
      this.head = deletenode.next;
    } else {
      const leader = this.traverseToIndex(index - 1);
      const deleteNode = leader.next;
      leader.next = deleteNode.next;
    }
    this.length--;
    return this.printList();
  }

  printList() {
    // O(n)
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new SinglyLinkedList(10);
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.insert(2, 7));

console.log(myLinkedList);
console.log(myLinkedList.printList());

console.log(myLinkedList.remove(1));
console.log(myLinkedList.remove(0));


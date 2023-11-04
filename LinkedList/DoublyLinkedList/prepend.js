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
    prepend(value){
        const newNode = {
            value:value,
            next:null,
            prev:null,
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;

        return this;
    }
  }
  
  const myLinkedList = new DoublyLinkedList(10)
  myLinkedList.prepend(1)

  console.log(myLinkedList);
  
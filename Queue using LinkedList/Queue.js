class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first;
    }
    enqueue(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length++;
      return this;
    }
    dequeue(){
      if(!this.first){
          return null;
      }
      if(this.last === this.first){
          this.last = null;;
      }
      this.first =  this.first.next;
      this.length--;
      return this;
    }
    print(){
      const array = [];
      let currentNode = this.first;
  
      while (currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return array;
    }
  }
  const myQueue = new Queue();
  console.log(myQueue.enqueue(10));
  console.log(myQueue.enqueue(20));
  console.log(myQueue.enqueue(30));
  console.log(myQueue.print());
  console.log(myQueue.peek());
  console.log(myQueue.dequeue());
  console.log(myQueue.print());
  
  
  
  
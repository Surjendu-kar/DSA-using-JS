class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingNode = this.top;
      this.top = newNode;
      this.top.next = holdingNode;
    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.top){
        return null;
    }
    if(this.bottom === this.top){
        this.bottom = null;;
    }
    const holdingNode = this.top;
    this.top =  this.top.next;
    this.length--;
    return holdingNode;
  }
  print(){
    const array = [];
    let currentNode = this.top;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}
const myStack = new Stack();
console.log(myStack.peek());
console.log(myStack.push(10));
console.log(myStack.print());

console.log(myStack.peek());
console.log(myStack.push(20));
console.log(myStack.print());

console.log(myStack.pop());
console.log(myStack.print());
console.log(myStack.pop()); 

console.log(myStack);
console.log(myStack.print());



class MyArray{
    constructor(){
        this.length = 0;
        this.data={};
    }
    get(index){  // O(1)
        return this.data[index];
    }
    push(val){   // O(1)
        this.data[this.length]=val;
        this.length++;
        return this.length;
    }
    pop(){       // O(1)
        const lastitem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastitem;
    }
    
    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index){   //O(n) --> because shifting elements
        for(let i=index; i<this.length-1; i++){
            this.data[i]=this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const arr = new MyArray()
arr.push('you')
arr.push('are')
arr.push('!')
arr.push('nice')
arr.push('?')
console.log(arr,'\n');

console.log('pop element: ',arr.pop());
arr.push('❤️')
console.log('delete element: ',arr.delete(2));

console.log('\n',arr);
console.log('\nget element: ',arr.get(3));

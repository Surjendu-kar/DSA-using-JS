// O(n^2) => Quadratic Time
// nested loop
 
const boxes = ['a','b','c','d','e']

const logAllPairsOfArray= (arr) =>{
    for(let i of arr){
        // for(let j of boxes){
        //     console.log(i," ",j); // same
        // }
        arr.forEach(j=>{
            console.log(i," ",j);
        })
    }
}

logAllPairsOfArray(boxes)
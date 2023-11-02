// BestCase -> O(1)
const num1 = ['Rahul','surjo','raj','taj']
console.log("BestCase ::");
const findRahul = (arr) =>{
    for(let i of arr){
        console.log('finding...');
        if(i === 'Rahul'){
            console.log('Found it.');
            break;
        }
    }
}

findRahul(num1);


// WorstCase -> O(n)
const num2 = ['surjo','raj','taj','Rahul']
console.log("\nWorstCase ::");
const findrahul = (arr) =>{
    for(let i of arr){
        console.log('finding...');
        if(i === 'Rahul'){
            console.log('Found it.');
            break;
        }
    }
}

findrahul(num2);
// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items.

// Example 1 ------>
const array1 = ['a','b','c','d'];
const array2 = ['e','f','g'];
// should return false.

// Example 2 ------>
const arr1 = ['a','b','c','d'];
const arr2 = ['e','f','a'];
// should return true. 

// process 1
// const checkCommonItems = (arr1,arr2) =>{ // O(n^2)
//     for(let i of arr1){
//         for(let j of arr2){
//             if(i === j){
//                 return true;
//             }
//         }
//     }
//     return false;
// }


// process 2                   // Time complexity is better than process 1
// const checkCommonItems = (arr1, arr2) => {  // O(a+b)
//     let map = {};
//     for (let i=0; i<arr1.length; i++){
//         if(!map[arr1[i]]){     // means if map[a] is not present 
//             const items = arr1[i];
//             map[items] = true; //then stored
//         }
//     }
//     console.log(map);
//     for(let j=0; j<arr2.length; j++){
//         if(map[arr2[j]]){      // check if item in 2nd array exist on created object.
//             return true;
//         }
//     }
//     return false;
// }

// process 3
const checkCommonItems = (arr1, arr2) => { 
    return arr1.some(i => arr2.includes(i));
}
console.log(checkCommonItems(array1,array2));
console.log(checkCommonItems(arr1,arr2));

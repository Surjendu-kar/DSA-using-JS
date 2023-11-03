const mergeSort = (arr1,arr2) =>{
    const sortedArray = [];

    let i = 0;
    let j = 0;
    let arr1Item = arr1[i];
    let arr2Item = arr2[j];

    if(arr1.length === 0){
        return arr2;
    }
    if(arr2.length === 0){
        return arr1;
    }

    while(arr1Item || arr2Item){
        console.log(arr1Item,arr2Item);
        if( !arr2Item || arr1Item < arr2Item){ // its not a best solution
            sortedArray.push(arr1Item);
            arr1Item = arr1[++i];
        }else{
            sortedArray.push(arr2Item);
            arr2Item = arr2[++j];
        }
    }


    return sortedArray; 
}
// mergeSort([0,3,4,31],[4,6,30])
console.log(mergeSort([0,3,4,31],[4,6,30]));
// output -> 0,3,4,4,30,31
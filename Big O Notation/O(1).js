function addUpTo(n){
    return n * (n + 1) / 2;
}

const t1 = performance.now();
addUpTo(1000000);
const t2 = performance.now()
console.log(`Time Elapsed: ${(t2-t1)/1000} seconds.`); 
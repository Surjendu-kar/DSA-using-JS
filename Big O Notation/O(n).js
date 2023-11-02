// O(n) ->  linear time -> for loops, while loops through n items
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

const t1 = performance.now();
addUpTo(1000000);
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// or

let nemo = new Array(100000).fill("nemo");
const FindNemo = (arr) => {
  const time1 = performance.now();
  arr.forEach((i) => {
    if (i === "nemo") {
      console.log("Found Nemo");
    }
  });
  const time2 = performance.now();
  console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
};

FindNemo(nemo);

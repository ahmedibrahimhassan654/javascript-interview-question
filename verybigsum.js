function aVeryBigSum(ar) {
   const sum =ar.reduce((a,b) => {return a+b},0)
console.log(sum);
}

aVeryBigSum([ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ])//5000000015
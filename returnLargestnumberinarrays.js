function largestOfFour(arr) {
    const array=[]

arr.map((element)=>{
  
   const maxnumber= Math.max(...element)
     array.push(maxnumber)
    
})
return array
    
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
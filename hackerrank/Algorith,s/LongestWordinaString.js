function findLongestWordLength(str) {
    // string.split(separator, limit)
    // The split() method is used to split a string into an array of substrings, and returns the new array.
   const words= str.split(' ')
   
    let array=[]
   for(let i=0;i<words.length;i++){
      
   const newarray= words[i].length
   array.push(newarray)
   
      

   }
 
   const maxNumber=Math.max(...array)
   console.log(maxNumber);







    // var words = str.split(' ');
    // console.log(words);
    // var maxLength = 0;
  
    // for (var i = 0; i < words.length; i++) {
    //   if (words[i].length > maxLength) {
    //     maxLength = words[i].length;
    //   }
    // }
  
    // console.log(maxLength);
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
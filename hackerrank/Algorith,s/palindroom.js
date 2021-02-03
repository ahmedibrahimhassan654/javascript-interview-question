//find palindroom
//if 'hello' after reverse='olleh' it is diffrent than original so it return false 

//palindroo('abba) reverse='abba'=== return true


const palindroom=(word)=>{
    /*
    1-change string to array//split('')
    2-reverse string
    //conver to original//join('')
    3-check if it is equal to original
     */
const wordToarray=word.split('')
console.log('wordToarray',wordToarray);
  const reverse=wordToarray.reverse()

  console.log('reverse string inside array',reverse);
  const original=reverse.join('')
  console.log(word===original);



  

}

palindroom('abba')
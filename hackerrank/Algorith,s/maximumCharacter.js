//find the character that apper most and how many of them in the word

const maxChar=(str)=>{
    //create empty object
    const obj={}
    //loop through str
    for(let char of str){
        if(!obj[char]){
            obj[char] =1
        }else{
            obj[char]++
        }
       
    }
    console.log(obj);
    // { a: 2, s: 2, d: 3, w: 1, '#': 2 }
    //loop through each key in the obj and calculate the maximun character apper 
    let maxNumber=0;
    let maximumCharacter =''
    for(let char in obj){
        if (obj[char]>=maxNumber){
            maxNumber=obj[char];
            maximumCharacter=char
        }
    }
    console.log(`the charachter ${maximumCharacter} repeted ${maxNumber} times`);

}
maxChar('assdddwa##')
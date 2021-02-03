//write algorithme to reverse an integer 
//15==>51,234==>432,-150==>-51

const reverseInt=(n)=>{
    //convert to string first, 
    //turn into array 
    //reverse method js
    //back to string 
    //back to int 
    if(n<=0){
        return -1*parseInt(n.toString().split('').reverse().join(''))

    }else{
        return parseInt(n.toString().split('').reverse().join(''))

    }




}

console.log({
    case1:reverseInt(15),
    case2:reverseInt(-10450),
    case3:reverseInt(-0)
});

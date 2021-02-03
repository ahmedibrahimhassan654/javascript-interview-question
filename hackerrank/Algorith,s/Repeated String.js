// Complete the repeatedString function below.
function repeatedString(s, n) {
    //aba,aba,aba,a
  
//هجيب اقل قيمه هترجع اما اقسم n/s.length
const substring=Math.floor(n/s.length)//3

const numberofAinsubstring=(s.match(/a/g)||[]).length//2

const reminder=n%s.length
const remenderofA=s
.split('')
.slice(0,reminder)
.filter((e)=>e==='a').length
if(n%s.length===0){
    return  substring*numberofAinsubstring
    //console.log(substring*numberofAinsubstring);

}else{
    return  substring*numberofAinsubstring+remenderofA
  //  console.log(substring*numberofAinsubstring+remenderofA);
}

// console.log(remenderofA);
// console.log(reminder);
}
  


repeatedString('aba',11)//expexted output 7
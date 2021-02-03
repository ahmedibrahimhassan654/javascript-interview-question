//start fron number =1 to 15 
//check if the number =3or its multible pro=int fiz
//check if the number =5or its multible pro=int buz
const fizbuz=(num)=>{
for(let i=1;i<=num;i++){
    if(i%3===0 && i%5===0){
        console.log('fizbuz');
    }else if(i%3===0){
        console.log('fiz');
    }else if(i%5===0){
        console.log('buz');
    }else{
        console.log(i);
    }
  
    
}
}

fizbuz(50)
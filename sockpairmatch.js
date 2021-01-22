function sockMerchant(ar, n) {
    //sort the array from low to height
    let sorted=ar.sort((a,b)=>a-b)//[10,10,10,10,20,20,20,30,50]
    let pairs=0;
    for(let i=0;i<n-1;i++){
        if(sorted[i]===sorted[i+1]){
            pairs++
            i+=1
        }
        
    }
    console.log(pairs)
    }

    sockMerchant([10, 20, 20 ,10, 10 ,30 ,50 ,10 ,20],9)
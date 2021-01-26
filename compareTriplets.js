function compareTriplets(a, b) {
    let aliceMark=0
    let bobmark=0
    let score=[0,0]
    a.forEach((num1, index) => {
        const num2 = b[index];
        console.log(num1, num2);
        if(num1>num2){
            score[0]=score[0]+1
        }
        if(num2>num1){
            score[1]= score[1]+1
        }
      });
      //console.log('alice mark total',aliceMark,'bob mark total',bobmark);
      console.log( score);
    }
compareTriplets([ 5, 10, 7 ] ,[ 3, 6, 15 ])
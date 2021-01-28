function hourglassSum(arr) {
    // let i=3;//represent to row number==>max row=3

    // let j=0//represent to coulm==>max col=3
    // const sum =arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]

    // console.log(sum);
    let sumArray=[]

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {

            if(i<=(Math.floor( arr.length/2))&& j<=(Math.floor( arr.length/2))){
               let sum =arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]
                 sumArray.push(sum)
                

            }

            
        }
    }
    console.log( Math.max(...sumArray));
}

    hourglassSum([ 
        [ 1, 1, 1, 0, 0 ,0],
        [ 0, 1, 0, 0, 0, 0 ],
        [ 1, 1, 1, 0, 0, 0 ],
        [ 0, 0, 2, 4, 4, 0 ],
        [ 0, 0, 0, 2, 0, 0 ],
        [ 0, 0, 1, 2, 4, 0 ] ])
       
    hourglassSum([ 
        [ -1, 1, -1, 0, 0 ,0],
        [ 0, -1, 0, 0, 0, 0 ],
        [ -1, -1, -1, 0, 0, 0 ],
        [ 0, -9, 2, -4,- 4, 0 ],
        [ -7, 0, 0, -2, 0, 0 ],
        [ 0, 0, -1, -2, -4, 0 ] ]) 
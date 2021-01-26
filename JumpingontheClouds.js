function jumpingOnClouds(cloud) {
const cloudlength=cloud.length
let count=-1
 for(var i=0;i<cloudlength;){
    if(cloud[i+2]==0){
        i=i+2
    }else{
        i=i+1
    }
    count++
 }

 console.log(count);

}

jumpingOnClouds([0, 0, 1 ,0 ,0 ,1 ,0])
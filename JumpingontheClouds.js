function jumpingOnClouds(cloud) {
const cloudlength=cloud.length
let count=0
 for(let i=0;i<cloudlength;){
    if(cloud[i+2]==0 && indexOf(cloud[i+2])<=cloudlength){
        i=i+2
    }else{
        i=i+1
    }
    count++
 }
console.log(count);
}

jumpingOnClouds([0,1,0,0,0,1,0])
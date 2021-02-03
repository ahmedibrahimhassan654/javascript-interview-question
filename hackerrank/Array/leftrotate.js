function rotateleft(arr,rotations) {

  const rottatedarray=arr.concat()
 // const rottatedarray=[]

  for(let i=0;i<rotations;i++){
    const firstItem=rottatedarray.shift()
    rottatedarray.push(firstItem)
    
  }

  console.log (rottatedarray)
}

rotateleft([1,2,3,4,5],4)
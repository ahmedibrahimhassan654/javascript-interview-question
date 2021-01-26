// Complete the repeatedString function below.
function repeatedString(s, n) {
    const totalarray=[]
    let numberofa=0
    const total=s.repeat(n)
    totalarray.push(...total)

    totalarray.map(e=>{
        if(e==='a'){
            numberofa++
        }
    })
    console.log(numberofa);
}

repeatedString('abc',10)
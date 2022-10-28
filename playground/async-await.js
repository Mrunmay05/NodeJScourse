const add=((a,b)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         resolve(a+b)
      },2000)
    })
 })

const dowork=async()=>{
    const sum=await add(1,99)
    return sum
}

dowork().then((result)=>{
    console.log('result',result)
}).catch((e)=>{
    console.log('e',e)
})

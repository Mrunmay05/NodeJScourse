const add=((a,b)=>{
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve(a+b)
     },2000)
   })
})

const doworkpromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       reject('error!')
    },2000)
})

doworkpromise.then((result)=>{
     console.log('success!',result)
}).catch((error)=>{
    console.log('failure',error)
})
const add=(a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b);

    },2000)
}

add(1,4,(sum)=>{
      console.log(sum)
})

const geocode=(address,callback)=>{
     setTimeout(()=>{
        const data={
            latitude: 8.0,
            longitude: 10.0
        }
        callback(data)
     },2000)
}

geocode('philadelphia',(data)=>{
    console.log(data)
})

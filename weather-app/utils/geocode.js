const request=require('request')

const geocode=(address,callback)=>{
    const url='https://api.openweathermap.org/geo/1.0/direct?q='+address+'&limit=1&appid=b86e6836e7cac28d71aa80f944651f1e'
    request({url:url,json:true},(error,{body})=>{
     if(error)
     {
       callback('Unable to connect to location',undefined)
     }
     else if(body.length==0)
     {
       callback('Unable to find location.Try again',undefined)
     }
     else{
       callback(undefined,{
         latitude:body[0].lat,
         longitude:body[0].lon,
         location:body[0].name
       })
     }
    })
 }

 module.exports=geocode
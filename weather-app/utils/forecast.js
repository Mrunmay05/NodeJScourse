const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const foreurl='https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=b86e6836e7cac28d71aa80f944651f1e'
    request({url:foreurl,json:true},(error,{body})=>{
      if(error)
      {
        callback('Unable to connect to weather services',undefined)
      }
      else if(body.length==0)
      {
        callback('Unable to find location',undefined)
      }
      else{
        callback(undefined,body.name +' is the name of the city.',
  
        )
      }
    })
  }

module.exports=forecast
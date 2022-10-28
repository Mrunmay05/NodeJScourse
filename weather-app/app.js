const request=require('request')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const address=process.argv[2]

//callback chaining: taking input of lat and lon and passing it to forecast
if(!address)
{
  console.log('Please enter city name!')
}
else{
  geocode(address,(error,data)=>{
    if(error){
      return console.log(error)
    }
    // console.log('Error',error)
    // console.log('Data',data)
    forecast(data.latitude,data.longitude,(error,foredata)=>{
      if(error) return console.log(error)
      
  
      // console.log('Error',error)
      // console.log('Data',foredata)
      console.log(data.location)
      console.log(foredata)
    })
    
  })
}
const express=require('express')

const app=express()

// app.com : whem somebody visits, we show them some respective page
// app.com/help  //help route
// app.com/about //about route

app.get('',(req,res)=>{ //req stores info about incoming request to server
//first parameter for get is the route, second is a function for when the route is visted
    res.send('Hello Express!')  
})

app.get('/help',(req,res)=>{
    res.send('help page')
})

app.get('/about',(req,res)=>{
    res.send('about page is on')
})

app.get('/weather',(req,res)=>{
    res.send('weather is being displayed')
})

app.listen(3000,()=>{
    console.log('server is up and running on port 3000')
})//starts server and makes it listen to requests on particular port

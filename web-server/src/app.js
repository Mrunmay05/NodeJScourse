const path=require('path')
const express=require('express')
const hbs=require('hbs')
const app=express()

const publicdirectorypath=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')


//set handlerbar engines and view location
app.set('view engine','hbs')//set allows us to set a value for a given express setting
app.set('views',viewpath)
hbs.registerPartials(partialpath)// app.com : whem somebody visits, we show them some respective page// app.com/help  //help route// app.com/about //about route

//setup static directory to server
app.use(express.static(publicdirectorypath))//its a way to customize the server

app.get('',(req,res)=>{
    res.render('index',{
        title:'weather-app',
        name:'mrunmay'
    })
})//to input dynamic index.hbs

app.get('/about',(req,res)=>{
    res.render('about',{
        route_name:'about',
        created_by:"mrunmay"
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        is_help:"provided",
        provided_by:"mrunmay"
    })
})

//we can also send json data through res.send(), automatically stringifies json
// app.get('/help',(req,res)=>{
//     res.send([{
//         name:'mrunmay',
//         age:20
//     },{
//         name:'dinya',
//         age:19
//     }])
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>About page intensified</h1>')
// })

app.get('/weather',(req,res)=>{
    res.send([{
        name_of_city: 'London',
        Latitude:23.33,
        Longitude:43.22
    },{
        name_of_city:'philadelphia',
        Latitude:70.91,
        Longitude:66.5
    }])
})

app.listen(3000,()=>{
    console.log('server is up and running on port 3000')
})//starts server and makes it listen to requests on particular port

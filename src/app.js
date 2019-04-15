const path=require('path')
const express=require('express')

console.log(__dirname)
//console.log(__filename)
console.log(path.join(__dirname,'../public'))

const app=express()
app.set('view engine','hbs')
app.use(express.static(path.join(__dirname,'../public')))


// app.get('',(req,res)=>{ //localhost:3000
//     res.send('Hellow express!')
// }) // params: rout,function that we describe what we wanna do when someone visit this spesipic roiut
 
app.get( '/help',(req,res) => { //localhost:3000/help
    // res.send({
    // name: 'tom',
    // age:22 })
    res.render('help',{
        title:'helpxxxx'
    })
})

// app.get('/about',(req,res)=>{ //localhost:3000/about
//     res.send('<h1>About</h1>')
// }) 
 app.get('/weather',(req,res)=>{ //localhost:3000/weather
    res.send(
        {
            forcast:'it is sunny day',
            location:'tel aviv israel'
        }  )
 })

 //app.com root rout
//app.com/help
//app.com/about

app.listen(3000,() => {
    console.log('Server is up  on port 3000')
})
const express = require("express")
const app=express()

app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>")
})
app.get('/user/:name',(req,res)=>{
    
   let n= req.params.name;
   res.send(`<h1>Hello ${n}</h1>`)
})

app.listen(8000)
const express = require('express');

const app =express();
const port =6611;

app.get('/',(req,res)=>{
    res.send("HELLO 11")
})

app.listen(port,()=>{
    console.log('listening on port 6611');
})
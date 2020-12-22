const express=require('express');
const app=express();
const routes=require('./routes/route')
app.use("/choco/customer/delivery",routes)



app.listen(3002,()=>{
    console.log("Listening to port ",3002);
})
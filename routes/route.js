const express=require('express')
const route=express.Router();



route.post("/:token",()=>{
    console.log("Creating A Delivery Object..");
})
route.get("/:token/:deliveryId",()=>{
    console.log("Getting Customer Delivery");
})
route.get("/:token/all",()=>{
    console.log("Getting All Customer Delivery");
})

module.exports=route;
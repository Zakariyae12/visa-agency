const express=require('express');const fs=require('fs');
const app=express();app.use(express.urlencoded({extended:true}));
app.post('/book',(req,res)=>{let d=JSON.parse(fs.readFileSync('bookings.json'));
d.push(req.body);fs.writeFileSync('bookings.json',JSON.stringify(d,null,2));
res.send('Booking saved');});app.listen(3000);
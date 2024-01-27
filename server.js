const express=require('express')
const cors=require('cors')
const login=require('./login/login');
const app=express()
app.use(cors())
app.use(express.json());
app.use('/login',login)

const laptops=require('./laptops/laptops')
app.use('/laptops',laptops)

const mobiles=require('./mobiles/mobiles')
app.use('/mobiles',mobiles)

const watches=require('./watches/watches')
app.use('/watches',watches)

app.listen(8080,()=>{
    console.log(`server listening port no 8080 successfully`);
})
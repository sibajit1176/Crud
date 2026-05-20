const express = require('express')
const studentRoute=require('./Routes/StudentRoutes/getAllStudent')
const courseRoute=require('./Routes/CourseRoutes/getAllCourse')
const cartRoutes=require('./Routes/cartRoute')
const userRoutes=require('./Routes/userroutes')
const productRoutes=require('./Routes/productroutes')
const port=3000

const app=express()

app.use(express.static('public'))
app.use(express.json())

app.use('/students',studentRoute)
app.use('/courses',courseRoute)
app.use('/cart',cartRoutes)
app.use('/users',userRoutes)
app.use('/products',productRoutes)

app.get('/',(req,res)=>{
  res.send("<h1>Welcome to the Student & Course Portal API!</h1>")
})
app.use((req,res)=>{
    res.send("<h1>Page not found</h1>")
})

app.listen(port,()=>{
  console.log(`Server running on port ${port}`);
  
})
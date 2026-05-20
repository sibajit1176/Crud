const express = require('express')
const studentRoute=require('./Routes/StudentRoutes/getAllStudent')
const courseRoute=require('./Routes/CourseRoutes/getAllCourse')
const port=3000

const app=express()

app.use('/students',studentRoute)
app.use('/courses',courseRoute)

app.get('/',(req,res)=>{
  res.send("<h1>Welcome to the Student & Course Portal API!</h1>")
})
app.use((req,res)=>{
    res.send("<h1>Page not found</h1>")
})

app.listen(port,()=>{
  console.log(`Server running on port ${port}`);
  
})
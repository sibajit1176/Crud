const form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let data=document.querySelector('input').value
    console.log(data);
    const payload={
        'name':data
    }
    addProduct(payload)
})
async function addProduct(payload) {
    try {
     const data= await axios.post('http://localhost:3000/products',payload)
     console.log(data);
     
    } catch (error) {
        console.log(error);
        
    }
}
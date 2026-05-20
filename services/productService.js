const getAllProducts=()=>{
    return "Fetching all products";
}
const getProductById=(id)=>{
    return `Fetching product with ID: ${id}`;
}
const addProduct=(data)=>{
    console.log(data);
    
 return data;
}
module.exports={
    getAllProducts,
    getProductById,
    addProduct
}
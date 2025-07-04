import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PeoductList from './PeoductList';

const Product = () => {
    const [product,setproduct] = useState([]);
    useEffect(()=>{
        const api ='https://dummyjson.com/products'
        axios.get(api)
        .then(res => {
            console.log(res.data.products)
            setproduct(res.data.products)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <>
      <h2>List of products</h2>
    <div className='row'> 
        {product.map(prod=>
           <PeoductList key={prod.id} props={prod}/> 
        )}
    </div>
    </>
  )
}

export default Product
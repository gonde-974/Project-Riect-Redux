import React from 'react'
import { useSelector } from 'react-redux';

function ProductsPage() {
  const { singleMessage } = useSelector((state) => state.productStore); // Поправено: product, не productStore
 
  
  return (
    <>
  
    <div className='bg-green-500 h-[100px] text-center text-white text-bold mt-[15px] font-3xl'>ProductPage
    <div>
    <h2>{singleMessage.title}</h2>
    <p>{singleMessage.message}</p>
    </div>
    </div>
    
    </>
    
  )
}

export default ProductsPage
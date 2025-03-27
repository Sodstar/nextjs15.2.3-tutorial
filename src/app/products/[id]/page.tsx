import React, {use} from 'react'
import { products } from '@/data/products'

function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const {id} = use(params);
    const filteredProduct = products.filter((p)=>p.id==Number(id))
    console.log(filteredProduct)

    if(filteredProduct.length==0) return <div>Product not found</div>

  return (
    <div className='flex flex-col'><h1 className='text-4xl'>{filteredProduct[0].title} - {id}</h1> 
    <img src={filteredProduct[0].image} className='rounded-lg w-1/2 mt-2' />
    <button className='bg-amber-500 text-white w-28 rounded-2xl mt-4'>Add to cart </button> <span className='text-lg font-bold'>(0)</span>
    </div>
  )
}

export default ProductDetail
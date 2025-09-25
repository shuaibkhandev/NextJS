import React from 'react'


export default async function ProductDetails({params} : {
    params : Promise<{
        productId : string
    }>
}) {
    const { productId } = (await params)
  return (
    <div>Product Details page {productId}</div>
  )
}

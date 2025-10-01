import Image from 'next/image'
import React, { FC } from 'react'
import SeeMore from './SeeMore'

interface Props {
    products: any[]
}

const ProductView:FC<Props> = (props) => {
    const {products} = props
    
  return (
    <div className='grid grid-cols-4 gap-4'>
        {
            products?.map((item: any) => (
                <div key={item.id}>
                    <div>
                        <Image src={item.thumbnail} alt={item.title} width={300} height={300}/>
                    </div>
                    <div>
                        <h3>{item.title}</h3>
                        <SeeMore id={item.id}/>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ProductView
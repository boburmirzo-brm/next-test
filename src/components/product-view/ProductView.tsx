import { FC, memo } from 'react';
import ProductImage from './ProductImage';

const ProductView:FC<{data: any[]}> = ({data}) => {
  return (
    <div className="grid grid-cols-4 gap-3">
       {
        data?.map((item:any) => (
            <div key={item.id}>
                <ProductImage title={item.title} image={item.images[0]} id={item.id}/>
                <div>
                    <h3>{item.title}</h3>
                </div>
            </div>
        ))
       }
    </div>
  );
};

export default memo(ProductView);
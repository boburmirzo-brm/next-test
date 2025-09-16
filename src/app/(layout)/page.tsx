import ProductView from '@/components/product-view/ProductView';
import { memo } from 'react';

const Home = async() => {
  const response = await fetch("https://api.errorchi.uz/product?limit=8", {cache:"force-cache"})
  const data = await response.json()
  
  return (
    <div className="container mx-auto">
      <ProductView data={data?.data?.allProducts}/>
    </div>
  );
};

export default memo(Home);
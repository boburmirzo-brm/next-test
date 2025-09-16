"use client"
import { useQuery } from '@tanstack/react-query';
import { memo } from 'react';

const Contact = () => {
  const {data} = useQuery({
    queryKey: ["todo"],
    queryFn: ()=> fetch("https://api.errorchi.uz/product").then(res=> res.json())
  })
  console.log(data);
  
  return (
    <div className="Page">
      <h2 className='text-2xl text-center'>Tab 1 Page</h2>
    </div>
  );
};

export default memo(Contact);
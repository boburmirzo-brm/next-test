import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import React from "react";

type Props = {
  params: Promise<{ id: string }>
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params
 
  const product = await fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json())
 
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [product.thumbnail],
    },
  }
}



// SEO

const DetailProduct = async ({params}: {params: Promise<{id: string}>}) => {
   const {id} = await params

  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  }); // ISR
  const data = await response.json();

  return <div className="grid grid-cols-2">
    <div>
        <Image src={data?.images[0]} alt={data?.title} width={500} height={500}/>
    </div>
    <div>
        <h1>{data?.title}</h1>
        <strong>{data?.price} USD</strong>
        <p>{data?.description}</p>
    </div>
  </div>;
};

export default DetailProduct;

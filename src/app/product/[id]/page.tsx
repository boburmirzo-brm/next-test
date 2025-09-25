import { Metadata } from "next";
import { memo } from "react";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return {
    title: data.title,
    description: data?.description,
    openGraph: {
        images: [data?.thumbnail],
    },
  };
}

export async function generateStaticParams() {
  const response = await fetch('https://dummyjson.com/products?limit=50', {next: {revalidate: 60 * 5}})
  const data = await response.json()

  return data.products.map((product: any) => ({
    id: product.id.toString()
  }))
}

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 * 5 },
  });
  const data = await response.json();

  return (
    <div>
      <h2>Detail Page {id}</h2>
      <img src={data?.thumbnail} alt="" />
      <h1>{data?.title}</h1>
    </div>
  );
};

export default memo(Detail);

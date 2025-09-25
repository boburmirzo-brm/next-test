import Link from "next/link";
import { memo } from "react";

const Product = async () => {
  const response = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 * 5 },
  });
  const data = await response.json();
  console.log();
  
  return (
    <div>
      <h2>Page</h2>
      <div className="grid grid-cols-4">
        {
            data?.products?.map((item:any) => (
                <div key={item.id}>
                    <img src={item.thumbnail} alt="" />
                    <h3>{item.title}</h3>
                    <Link href={`/product/${item.id}`}>View more</Link>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default memo(Product);

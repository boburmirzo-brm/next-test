"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";

const ProductImage:FC<{title: string, image: string, id: number}> = (props) => {
    const {title, image, id} = props
    const router = useRouter()
  return (
    <div>
      <Image
        src={"https://api.errorchi.uz/product/image/" + image}
        width={300}
        alt={title}
        height={300}
        onClick={()=> router.push(`/product/${id}`)}
      />
    </div>
  );
};

export default memo(ProductImage);

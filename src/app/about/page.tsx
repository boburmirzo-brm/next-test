"use client";
import CommentView from "@/components/CommentView";
import { memo, useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch("https://68ca8602430c4476c349d48a.mockapi.io/comment")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h2  className="text-center text-2xl my-4 font-bold">About Page</h2>
      <CommentView comments={data} />
    </div>
  );
};

export default memo(About);

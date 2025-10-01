"use client";
import CommentView from "@/components/CommentView";
import { memo, useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true)
  // CSR
  useEffect(() => {
    setLoading(true)
    fetch("https://68ca8602430c4476c349d48a.mockapi.io/comment")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      });
  }, []);
  return (
    <div>
      <h2  className="text-center text-2xl my-4 font-bold">About - CSR</h2>
      {loading && <div className="text-center text-2xl">Loading...</div>}
      <CommentView comments={data} />
    </div>
  );
};

export default memo(About);

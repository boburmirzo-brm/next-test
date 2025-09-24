"use client";
import { memo, useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://68ca8602430c4476c349d48a.mockapi.io/comment"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>About Page</h2>
      {data?.map((item: any) => (
        <div key={item.id}>{item.text}</div>
      ))}
    </div>
  );
};

export default memo(About);

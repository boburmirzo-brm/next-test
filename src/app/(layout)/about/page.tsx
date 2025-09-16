"use client";
import { memo, useEffect } from "react";

const About = () => {
  useEffect(() => {
    const getMe = async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getMe();
  }, []);
  return (
    <div className="Page">
      <h2>About Page</h2>
    </div>
  );
};

export default memo(About);

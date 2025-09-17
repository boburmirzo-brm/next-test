// app/verify/Verify.tsx (client component)
"use client";
import { useEffect, useState, memo } from "react";

const Verify = ({ email, password }: { email?: string; password?: string }) => {
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const postData = async () => {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username: email, password }),
      });
      if (!res.ok) {
        setError("xato");
        return;
      }
      window.location.href = "/about";
    };
    postData();
  }, [email, password]);

  return (
    <div className="Page">
      {error && <p>{error}</p>}
      <h2>Verify Page</h2>
    </div>
  );
};

export default memo(Verify);

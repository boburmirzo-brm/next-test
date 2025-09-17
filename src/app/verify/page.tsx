"use client";
import { useSearchParams } from "next/navigation";
import { memo, useEffect, useState } from "react";

const Verify = () => {
  const param = useSearchParams();
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const postData = async () => {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: param.get("email"),
          password: param.get("password"),
        }),
      });
      if (!res.ok) {
        setError("xato");
        return;
      }
      window.location.href = "/about";
    };
    postData();
  }, []);

  return (
    <div className="Page">
      {error && <p>{error}</p>}
      <h2>Verify Page</h2>
    </div>
  );
};

export default memo(Verify);

// import { memo } from 'react';

// const Page = () => {
//   return (
//     <div className="Page">
//       <h2>Page</h2>
//     </div>
//   );
// };

// export default memo(Page);

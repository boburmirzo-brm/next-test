import { memo } from "react";
// SSR - server side rendering
// CSR - client side rendering
// SSG - static site generation
// ISR - incremental static regeneration.

const Home = async () => {

  // const response = await fetch("https://68ca8602430c4476c349d48a.mockapi.io/comment"); // SSG
  // const response = await fetch("https://68ca8602430c4476c349d48a.mockapi.io/comment", {cache: "force-cache"}); // SSG

  // const response = await fetch("https://68ca8602430c4476c349d48a.mockapi.io/comment", {cache: "no-store"}); // SSR

  const response = await fetch("https://68ca8602430c4476c349d48a.mockapi.io/comment", {next: {revalidate: 60}}); // ISR

  const data = await response.json();

  return (
    <div>
      <h2>Home Page</h2>
      {data?.map((item: any) => (
        <div key={item.id}>{item.text}</div>
      ))}
    </div>
  );
};

export default memo(Home);

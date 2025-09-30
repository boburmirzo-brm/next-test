import CommentView from "@/components/CommentView";
import { memo } from "react";
// SSR - Server Side Rendering
// CSR - Client Side Rendering
// SSG - Static Site Generation
// ISR - Incremental Static Regeneration

const Home = async () => {
  // const response = await fetch("https://68ca8602430c4476c349d48a.mockapi.io/comment", {cache: "force-cache"}); // SSG
  // const response = await fetch("https://68ca8602430c4476c349d48a.mockapi.io/comment", {cache: "no-store"}); // SSR
  const response = await fetch("https://68ca8602430c4476c349d48a.mockapi.io/comment", {next: {revalidate: 60}}); // ISR
  const data = await response.json();

  return (
    <div>
      <h2 className="text-center text-2xl my-4 font-bold">Home - SSR</h2>
      <CommentView comments={data} />
    </div>
  );
};

export default memo(Home);

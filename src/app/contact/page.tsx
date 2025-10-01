import CommentView from "@/components/CommentView";
import { memo } from "react";

const Contact = async () => {
  const response = await fetch("https://68ca8602430c4476c349d48a.mockapi.io/comment");
  const data = await response.json();
  return (
    <div>
      <h2 className="text-center text-2xl my-4 font-bold">Contact - SSR</h2>
      <CommentView comments={data} />
    </div>
  );
};

export default memo(Contact);

import { memo } from "react";

const Home = async () => {
  const response = await fetch(
    "https://68ca8602430c4476c349d48a.mockapi.io/comment"
  );
  const data = await response.json();
  console.log(data);

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

import { memo } from "react";
// SSR - Server Side Rendering
// CSR - Client Side Rendering
// SSG - Static Site Generation
// ISR - Incremental Static Regeneration

const Home = async () => {
  return (
    <div>
      <h2 className="text-center text-2xl my-4 font-bold">Home page</h2>
    </div>
  );
};

export default memo(Home);

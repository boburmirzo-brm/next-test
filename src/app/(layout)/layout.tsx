import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { memo, ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="Layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default memo(Layout);

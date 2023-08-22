import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

import { Be_Vietnam_Pro } from "next/font/google";

const vietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={vietnam.className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

import Header from "./header";
import Footer from "./footer";

import { ChildrenProps } from "utils/types";


const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;

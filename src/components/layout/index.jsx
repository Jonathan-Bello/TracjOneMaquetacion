import * as React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        {/* <Header item1="Home" item2="Marketplace" item3="Contact" /> */}
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;

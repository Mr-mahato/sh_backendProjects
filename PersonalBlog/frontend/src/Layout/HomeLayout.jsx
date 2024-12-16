import { Outlet } from "react-router-dom";
import Header from "@/Component/Header";
import Footer from "@/Component/Footer";
import Home from "@/Page/Home";
export const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

//
//
//
//
import { Outlet } from "react-router-dom";
import AuthNav from "./components/navs/AuthNav";
import Navbar from "./components/navs/Navbar";
import Footer from "./components/Footer";
import DiscountModal from "./components/models/DiscountModel";


export default function Layout() {
  return (
    <>
      <DiscountModal/>
      <AuthNav />
      <Navbar />
      <main className="container  min-h-[60vh] py-10 px-4 md:px-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

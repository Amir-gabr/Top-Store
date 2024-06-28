//
//
//
//
import { Outlet } from "react-router-dom";
import AuthNav from "./AuthNav";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Layout() {
  return (
    <>
      <AuthNav />
      <Navbar />
      <main className="container  min-h-[60vh] py-10 px-4 md:px-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

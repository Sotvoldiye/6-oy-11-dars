import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OnlineUsers from "../components/OnlineUsers";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="container">
       <div className="grid-container">
       <Outlet />
       <OnlineUsers/>
       </div>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;

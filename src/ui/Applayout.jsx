import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Applayout() {
  return (
    <div className="font-nunito grid h-screen grid-cols-[5rem_1fr] md:grid-cols-[11rem_1fr]">
      <Header />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 bg-[#f1f5f9]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Applayout;

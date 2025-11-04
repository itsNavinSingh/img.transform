import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

function Page() {
    return (
    <div className="w-screen min-h-screen bg-gray-50 space-y-2">
        <NavBar />
        <Outlet />
        <Footer />
    </div>
    );
}
export default Page
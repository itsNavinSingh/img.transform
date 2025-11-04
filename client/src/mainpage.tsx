import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";

function Page() {
    return (
    <div className="w-screen min-h-screen bg-gray-50">
        <NavBar />
        <Outlet />
    </div>
    );
}
export default Page
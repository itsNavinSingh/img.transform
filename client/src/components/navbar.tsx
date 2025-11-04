import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="w-screen h-20 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-600 flex justify-center items-center px-5">
      <div className="flex-1">
        <Link to={"/"} className="text-white text-2xl font-semibold font-serif">
          img.tranform
        </Link>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <Link to={"/"} className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 text-xl font-semibold">
          Home
        </Link>
        <Link to={"/about"} className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 text-xl font-semibold">
          About
        </Link>
      </div>
    </div>
  );
};
export default NavBar;

const NavBar: React.FC = () => {
  return (
    <div className="w-screen h-20 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-600 flex justify-center items-center px-5">
      <div className="flex-1">
        <h3 className="text-white text-2xl font-semibold font-serif">
          img.tranform
        </h3>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <h3 className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 text-xl font-semibold">
          Home
        </h3>
        <h3 className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 text-xl font-semibold">
          About
        </h3>
      </div>
    </div>
  );
};
export default NavBar;

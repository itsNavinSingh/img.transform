function Footer() {
  return (
    <footer className="w-screen bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-600 py-4 flex flex-col items-center justify-center">
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-blue-600">img.transform</span>. All rights reserved.
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
        Developed by <span className="font-medium">Manish Kumar</span>, <span className="font-medium">Navin Kumar Singh</span>, <span className="font-medium">Nikhil Kumar</span>
      </p>
    </footer>
  );
}

export default Footer;

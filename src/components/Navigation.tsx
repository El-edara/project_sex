import { FaSearch, FaUserCircle } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="border-2 text-black border-gray-200 flex justify-between items-center p-4">
      <div className="flex items-center px-4 py-2 border-2 border-gray-200 rounded-full max-w-md ml-[5rem]">
        <FaSearch className="mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent outline-none"
        />
      </div>
      <section className="flex items-center mr-[5rem]">
        <FaUserCircle className="mr-2 text-3xl" />
      </section>
    </nav>
  );
};
export default Navigation;

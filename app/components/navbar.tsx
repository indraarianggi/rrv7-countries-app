import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <div className="w-full bg-white px-8 text-gray-700 shadow-sm">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between py-5 md:flex-row">
        <div className="flex flex-col items-center md:flex-row">
          <NavLink to="/" className="mb-5 flex items-center md:mb-0">
            <span className="text-xl font-black text-gray-900 select-none">
              REST<span className="text-indigo-600">Explorer</span>
            </span>
          </NavLink>

          <nav className="ml-0 flex flex-wrap items-center md:ml-8 md:border-l md:pl-8">
            <NavLink
              to="/"
              className="mr-5 font-medium text-gray-600 hover:text-gray-900"
            >
              Home
            </NavLink>
            <NavLink
              to="/countries"
              className="mr-5 font-medium text-gray-600 hover:text-gray-900"
            >
              Countries
            </NavLink>
            <NavLink
              to="/about"
              className="mr-5 font-medium text-gray-600 hover:text-gray-900"
            >
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

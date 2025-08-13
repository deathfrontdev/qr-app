import { Link } from "react-router-dom";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-white text-2xl font-bold">QR Tools</h1>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav
          className={`flex-col md:flex-row md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto md:bg-transparent transition-all duration-300 ${
            isOpen ? "flex bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="relative px-5 py-2 font-semibold text-white rounded-lg overflow-hidden group"
            onClick={() => setIsOpen(false)}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative z-10">Generate QR</span>
          </Link>
          <Link
            to="/scan"
            className="relative px-5 py-2 font-semibold text-white rounded-lg overflow-hidden group"
            onClick={() => setIsOpen(false)}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative z-10">Scan QR</span>
          </Link>
          <Link
            to="/generateHistory"
            className="relative px-5 py-2 font-semibold text-white rounded-lg overflow-hidden group"
            onClick={() => setIsOpen(false)}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative z-10">Generation History</span>
          </Link>
          <Link
            to="/scanHistory"
            className="relative px-5 py-2 font-semibold text-white rounded-lg overflow-hidden group"
            onClick={() => setIsOpen(false)}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative z-10">Scan History</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

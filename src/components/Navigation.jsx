import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-white text-2xl font-bold">QR Tools</h1>
        <nav className="flex space-x-6">
          <Link
            to="/"
            className="relative px-5 py-2 font-semibold text-white rounded-lg overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative z-10">Generate QR</span>
          </Link>
          <Link
            to="/scan"
            className="relative px-5 py-2 font-semibold text-white rounded-lg overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative z-10">Scan QR</span>
          </Link>
          <Link
            to="/generateHistory"
            className="relative px-5 py-2 font-semibold text-white rounded-lg overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative z-10">Generation History</span>
          </Link>
          <Link
            to="/scanHistory"
            className="relative px-5 py-2 font-semibold text-white rounded-lg overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative z-10">Scan History</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 text-center">
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 text-[#968cc4]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-24 w-24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>
        </div>

        <h1 className="mb-2 text-4xl font-bold text-gray-800">404</h1>
        <h2 className="mb-4 text-xl font-medium text-gray-700">
          Page Not Found
        </h2>

        <p className="mb-6 text-gray-500">
          Sorry, we couldn't find the page you're looking for.
        </p>

        <Link
          to="/"
          className="focus:ring-opacity-50 inline-block rounded-md bg-[#968cc4] px-6 py-3 font-medium text-white transition-colors hover:bg-[#7a6faa] focus:ring-2 focus:ring-[#968cc4] focus:outline-none"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;

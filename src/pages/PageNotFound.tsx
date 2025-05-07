import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-zinc-100 to-zinc-200 text-gray-800 px-4 text-center">
      <div className="text-[8rem] font-bold leading-none animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-500">
        404
      </div>
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">Page Not Found</h1>
      <p className="text-lg md:text-xl text-zinc-600 mb-8 max-w-md">
        The page you're looking for doesn’t exist or has been moved. 
      </p>  
      <Link
        to="/"
        className="px-6 py-3 bg-fuchsia-500 text-white rounded-xl shadow-lg hover:bg-fuchsia-600 transition duration-200"
      >
        Go Home
      </Link>
    </div>
  );
}
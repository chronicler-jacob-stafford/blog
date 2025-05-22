import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b text-emerald-900 px-4 text-center">
      <div className="text-[8rem] font-bold leading-none animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-900">
        404
      </div>
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">Page Not Found</h1>
      <p className="text-lg md:text-xl text-zinc-600 mb-8 max-w-md">
        The page you're looking for doesn’t exist or has been moved. 
      </p>  
      <Link
        to="/"
        className="px-6 py-3 bg-emerald-600 text-white rounded-xl shadow-lg hover:bg-amber-800 transition duration-200"
      >
        Go Home
      </Link>
    </div>
  );
}
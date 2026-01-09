import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-custom-1 flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-6xl font-outfit mb-4">404</h1>
        <p className="text-xl mb-8">Page Not Found</p>
        <Link to="/" className="text-custom-2 hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;


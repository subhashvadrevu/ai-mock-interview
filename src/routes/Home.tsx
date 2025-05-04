import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 m-4">
      {/* Hero Image */}
      <div className="mb-8">
        <img
          src="/assets/img/hero.png"
          alt="AI Mock Interview"
          className="w-64 h-64 object-cover rounded-full shadow-lg"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center max-w-lg mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Mock <span className="text-blue-500">AI</span> Interview Platform
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Practice coding, system design, and behavioral interviews with our AI-powered platform.
        </p>

      
        <Link to="/generate">
          <Button className="w-full py-3 transition-all duration-300 rounded-lg shadow-md">
            Start Interview
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

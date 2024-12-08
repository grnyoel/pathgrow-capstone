import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex w-4/5 max-w-4xl shadow-lg bg-white rounded-lg">
        <div className="w-1/2 bg-yellow-400 p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white mb-4">PathGrow</h1>
          <p className="text-white text-lg mb-6">
            A platform designed to provide learning experiences tailored to
            individuals’ needs.
          </p>
          <Link to="/login">
            <button className="bg-white text-green-600 font-bold px-6 py-2 rounded-md">
              Sign In
            </button>
          </Link>
        </div>
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              placeholder="Username"
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-lg px-4 py-2"
            />
            <button className="bg-green-500 text-white py-2 rounded-md">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

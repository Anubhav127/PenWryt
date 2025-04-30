import React from "react";
import { Login as LoginComponent } from "../components";
function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 transform hover:scale-[1.01] transition-all duration-300">
        <LoginComponent />
      </div>
    </div>
  );
}

export default Login;

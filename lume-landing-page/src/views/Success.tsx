import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        Password Reset Successful!
      </h1>
      <p className="text-gray-700 mb-6">
        Your password has been updated. You can now log in with your new password.
      </p>

    </div>
  );
}

export default Success;

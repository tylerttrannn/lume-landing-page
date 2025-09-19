import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function Success() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg px-8 py-12 text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
            <CheckCircle className="w-8 h-8 text-gray-600" />
          </div>

          {/* Header */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-3">
            Password Updated
          </h1>
          
          {/* Description */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            Your password has been successfully updated. You can now sign in with your new credentials.
          </p>



          {/* Helper Text */}
          <p className="text-xs text-gray-500">
            Make sure to keep your new password secure
          </p>
        </div>

      </div>
    </div>
  );
}

export default Success;
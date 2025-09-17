import Navbar from "../../src/components/comp-577";

function Terms() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex flex-col items-center justify-start px-6 py-12 max-w-3xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

        <p className="mb-4">
          By downloading or using this app, you agree to these terms. Please
          read them carefully before using the app.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of the App</h2>
        <p className="mb-4">
          You agree to use the app only for lawful purposes and in a way that
          does not infringe the rights of others or restrict their use of the
          app.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Intellectual Property</h2>
        <p className="mb-4">
          All content, trademarks, and data in this app are owned by or licensed
          to us. You may not copy, modify, or distribute any part of the app
          without our prior written permission.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Liability</h2>
        <p className="mb-4">
          We are not responsible for any damages, losses, or issues that may
          arise from using the app. Use the app at your own risk.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Changes</h2>
        <p className="mb-4">
          We may update these Terms and Conditions from time to time. Continued
          use of the app after changes means you accept the updated terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms and Conditions, please
          contact us at <span className="font-medium">lumescreenapp@gmail.com</span>.
        </p>
      </main>
    </div>
  );
}

export default Terms;

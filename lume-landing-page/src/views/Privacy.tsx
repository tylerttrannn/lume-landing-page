function Privacy() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center justify-start px-6 py-12 max-w-3xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          Your privacy matters to us. This Privacy Policy explains how we handle
          information when you use our app.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          The information we collect is limited to:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>Study Habit Data:</strong> Stored locally on your device. You may 
            choose to share it with friends you accept.
          </li>
          <li>
            <strong>Optional Survey Data:</strong> Responses you provide in the survey. 
            These responses are <strong>anonymous</strong> and not tied to your name or account.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Information</h2>
        <p className="mb-4">
          Study habit data is used to provide you with personalized insights and, if you choose, 
          to share with approved friends. Survey data is used solely for analytics and improving the app. 
          We do not sell or share any of this information with third parties.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
        <p className="mb-4">
          Study habit data is private by default. You can choose to share it with friends you approve. 
          Optional survey data is <strong>anonymous</strong> and never shared with anyone.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Deletion</h2>
        <p className="mb-4">
          You may request deletion of your study habit or survey data at any time. 
          All data is <strong>automatically deleted</strong> if you delete your account.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Updated policies will be available here. 
          Continued use of the app after changes means you accept the new policy.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy or wish to request deletion of your data, 
          please contact us at{" "}
          <span className="font-medium">lumescreenapp@gmail.com</span>.
        </p>
      </main>
    </div>
  );
}

export default Privacy;

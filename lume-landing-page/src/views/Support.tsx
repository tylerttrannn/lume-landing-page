import { useState } from "react";

const faqs = [
  {
    question: "How do I share my study habits with friends?",
    answer:
      "Go to the Friends tab in the app, accept a friend request, and choose which study habit info to share. Only approved friends can see your data.",
  },
  {
    question: "How can I delete my study habit data?",
    answer:
      "You can request deletion through the app settings or by contacting support. All data is automatically deleted if you delete your account.",
  },
  {
    question: "Is my survey data shared with anyone?",
    answer:
      "Optional survey data is completely anonymous and not linked to your name or account. It is never shared with third parties.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can email us at lumescreenapp@gmail.com. We will respond to questions and requests promptly.",
  },
  {
    question: "How do I stay updated with app improvements?",
    answer:
      "Check the App Store release notes or this support page for updates and bug fixes.",
  },
];

export default function Support() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our app
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Question tabs */}
        <div className="lg:w-2/5">
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <button
                key={index}
                className={`w-full text-left px-6 py-4 rounded-lg border transition-all duration-200 ${
                  activeIndex === index
                    ? "bg-gray-50 border-gray-300 shadow-sm"
                    : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-25"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span
                  className={`text-sm font-medium block ${
                    activeIndex === index ? "text-gray-900" : "text-gray-700"
                  }`}
                >
                  {faq.question}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Answer panel */}
        <div className="lg:w-3/5">
          <div className="bg-white border border-gray-200 rounded-lg p-8 min-h-48">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {faqs[activeIndex].question}
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              {faqs[activeIndex].answer}
            </p>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="mt-16 text-center">
        <div className="bg-gray-50 rounded-lg px-8 py-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            We're here to help! Reach out to our support team.
          </p>
          <a
            href="mailto:lumescreenapp@gmail.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
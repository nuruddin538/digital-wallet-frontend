import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqCategories = [
    {
      category: "Account & Registration",
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "Click on the 'Register' button in the top navigation, fill in your details including name, email, phone number, and choose a secure password. You'll need to verify your email address to activate your account.",
        },
        {
          question: "What documents do I need to register?",
          answer:
            "For basic accounts, you only need a valid email and phone number. For higher transaction limits, we may require identity verification documents like government-issued ID.",
        },
        {
          question: "Can I have multiple accounts?",
          answer:
            "No, each individual is allowed only one personal account to maintain security and comply with financial regulations.",
        },
      ],
    },
    {
      category: "Transactions & Payments",
      questions: [
        {
          question: "How long do transfers take?",
          answer:
            "Most transfers are instant. However, depending on network conditions, it may take up to 5 minutes. Bank transfers may take 1-3 business days.",
        },
        {
          question: "Are there any transaction limits?",
          answer:
            "Yes, we have daily and monthly transaction limits for security. Basic users can transfer up to $1,000 daily. Verified users have higher limits up to $5,000 daily.",
        },
        {
          question: "What should I do if a transaction fails?",
          answer:
            "If a transaction fails, the amount will be refunded to your wallet within 24 hours. If you don't see the refund, please contact our support team with the transaction ID.",
        },
      ],
    },
    {
      category: "Security & Privacy",
      questions: [
        {
          question: "How secure is my money?",
          answer:
            "We use bank-level security including 256-bit SSL encryption, two-factor authentication, and regular security audits. Your funds are protected in secure accounts.",
        },
        {
          question: "What should I do if I suspect unauthorized activity?",
          answer:
            "Immediately contact our 24/7 support team and change your password. We'll help you secure your account and investigate any suspicious activity.",
        },
        {
          question: "Is my personal information safe?",
          answer:
            "Yes, we follow strict data protection regulations and never share your personal information with third parties without your consent.",
        },
      ],
    },
    {
      category: "Fees & Charges",
      questions: [
        {
          question: "What are your fees?",
          answer:
            "Most personal transactions are free. Business transactions may have small fees. There are no monthly maintenance fees for personal accounts.",
        },
        {
          question: "Are there hidden charges?",
          answer:
            "No, we believe in transparent pricing. All fees are clearly displayed before you confirm any transaction.",
        },
        {
          question: "Do you charge for customer support?",
          answer:
            "No, our customer support is completely free. We're here to help you 24/7 through chat, email, or phone.",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Find quick answers to common questions about our digital wallet
          services
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 border-b pb-2">
              {category.category}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((item, itemIndex) => (
                <AccordionItem
                  key={itemIndex}
                  value={`item-${categoryIndex}-${itemIndex}`}
                >
                  <AccordionTrigger className="text-left font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      {/* Still have questions section */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Can't find the answer you're looking for? Please chat with our
          friendly team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Contact Support
          </a>
          <a
            href="mailto:support@digitalwallet.com"
            className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}

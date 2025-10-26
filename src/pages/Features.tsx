import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      title: "Instant Money Transfer",
      description:
        "Send money to friends, family, or businesses instantly with just an email or phone number.",
      icon: "💸",
      category: "Transfers",
    },
    {
      title: "Cash In/Out Services",
      description:
        "Easily add or withdraw cash through our extensive agent network nationwide.",
      icon: "🏧",
      category: "Cash Services",
    },
    {
      title: "Bill Payments",
      description:
        "Pay your utility bills, mobile top-ups, and other services directly from your wallet.",
      icon: "📱",
      category: "Payments",
    },
    {
      title: "Transaction History",
      description:
        "Comprehensive record of all your transactions with advanced filtering and search.",
      icon: "📊",
      category: "Management",
    },
    {
      title: "Multi-layer Security",
      description:
        "Advanced encryption, 2FA, and biometric authentication to keep your money safe.",
      icon: "🛡️",
      category: "Security",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Round-the-clock support through chat, email, and phone for all your needs.",
      icon: "👥",
      category: "Support",
    },
  ];

  const categories = [...new Set(features.map((f) => f.category))];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Powerful Features</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Discover everything you can do with our digital wallet platform
        </p>
      </div>

      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features
              .filter((feature) => feature.category === category)
              .map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      ))}

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Experience These Features?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Join thousands of satisfied users today
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/register"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="/contact"
            className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { useAppSelector } from "@/redux/hook";
import { Link } from "react-router";

export default function Homepage() {
  // const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  const features = [
    {
      title: "Instant Transfers",
      description: "Send money to anyone, anywhere in seconds",
      icon: "⚡",
    },
    {
      title: "Secure & Safe",
      description: "Bank-level security to protect your money",
      icon: "🔒",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer service",
      icon: "📞",
    },
    {
      title: "Zero Fees",
      description: "No hidden charges on transactions",
      icon: "💸",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Digital Wallet Reimagined
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience seamless digital transactions with our secure, fast, and
            reliable wallet platform. Join thousands of users who trust us with
            their money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* {isAuthenticated ? (
              <Button asChild size="lg">
                <Link
                  to={
                    user?.role === "admin"
                      ? "/admin"
                      : user?.role === "agent"
                      ? "/agent"
                      : "/dashboard"
                  }
                >
                  Go to Dashboard
                </Link>
              </Button>
            ) : (
              <>
                <Button asChild size="lg">
                  <Link to="/register">Get Started Free</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/login">Sign In</Link>
                </Button>
              </>
            )} */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Wallet?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Everything you need for modern digital transactions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
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
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Active Users
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                $10M+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Transactions
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                99.9%
              </div>
              <div className="text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join our growing community of satisfied users
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/register">Create Your Account</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

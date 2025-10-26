export default function About() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Digital Wallet</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          We're revolutionizing the way people handle digital transactions with
          security, speed, and simplicity at our core.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Founded in 2024, Digital Wallet emerged from a simple idea: making
            digital transactions accessible to everyone. We believe that
            managing your money should be effortless, secure, and available
            24/7.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Our team of financial experts and technology enthusiasts work
            tirelessly to ensure that you have the best digital wallet
            experience possible.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-300">
            To empower individuals and businesses with fast, secure, and
            accessible digital financial services that simplify everyday
            transactions and drive financial inclusion.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mt-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-2">Security First</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your security is our top priority with bank-level encryption and
              protection.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Instant transactions that work when you need them most.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-2">User Focused</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Designed with you in mind - simple, intuitive, and powerful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

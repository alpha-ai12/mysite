import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-white to-blue-100 p-6 text-gray-800">
      {/* Decorative Background Circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float delay-2000"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float delay-4000"></div>

      {/* Main Content */}
      <h1 className="text-4xl font-bold text-center mb-4">
        🛒 Buy Products that Sell Well! 💰
      </h1>
      <p className="text-2xl text-center mb-8">Coming soon... 🚀</p>

      {/* Call to Action Buttons */}
      <div className="flex space-x-4">
        <a
          href="#"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          Notify Me
        </a>
        <a
          href="#"
          className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-full shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </main>
  );
}

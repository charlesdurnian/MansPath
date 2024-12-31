import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Banner Section */}
      <main
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/images/manOnMountain.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6 text-yellow-400">
            The Unbroken Challenge
          </h1>
          <p className="text-xl mb-8">
            Transform yourself with these daily habits.
          </p>
        </div>
      </main>

      {/* Challenge Steps Section */}
      <section className="bg-gray-800 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8">
            What is the Unbroken Challenge?
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            The Unbroken Challenge is designed to build discipline, strength, and character. 
            Accumulate these daily tasks to start building the best version of yourself.
          </p>
        </div>

        {/* Stacked Steps with Links */}
        <div className="space-y-12">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              <Link href="/challenges/exercise">Step 1: Exercise</Link>
            </h3>
            <p className="text-gray-300">
              Commit to a daily workout... Move your body for at least 20 minutes every day.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              <Link href="/challenges/carnivore">Step 2: Carnivore Diet</Link>
            </h3>
            <p className="text-gray-300">
              Consume nothing but meat, eggs, butter, salt and water.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              <Link href="/challenges/create">Step 3: Create</Link>
            </h3>
            <p className="text-gray-300">
              Start creating so you can live the life you want to live.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              <Link href="/challenges/read">Step 4: Read</Link>
            </h3>
            <p className="text-gray-300">
              Read at least 15 pages of a book every.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

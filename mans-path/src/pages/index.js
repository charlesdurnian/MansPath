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
            The Hard Man Challenge
          </h1>
          <p className="text-xl mb-8">
            Transform yourself with the ultimate challenge.
          </p>
        </div>
      </main>

      {/* Challenge Steps Section */}
      <section className="bg-gray-800 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8">
            What is the Hard Man Challenge?
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            The Hard Man Challenge is designed to build discipline, strength, and character. 
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
              Commit to a daily workout—whether it’s weightlifting, running, or calisthenics. Move your body every day.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              <Link href="/challenges/carnivore">Step 2: Carnivore Diet</Link>
            </h3>
            <p className="text-gray-300">
              Fuel your body with a clean, meat-based diet to optimize strength, energy, and focus.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              <Link href="/challenges/noFap">Step 3: No Fap</Link>
            </h3>
            <p className="text-gray-300">
              Build self-control by abstaining from pornography and unnecessary distractions.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              <Link href="/challenges/skill">Step 4: Develop a Skill</Link>
            </h3>
            <p className="text-gray-300">
              Commit to daily progress in a skill—whether it’s coding, woodworking, or playing an instrument.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              <Link href="/challenges/read">Step 5: Read</Link>
            </h3>
            <p className="text-gray-300">
              Feed your mind by reading at least 10 pages of a book every day—non-fiction or self-improvement preferred.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

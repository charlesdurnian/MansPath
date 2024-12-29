import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function Exercise() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow text-center px-6 py-16">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Step 1: Exercise</h1>
        <p className="text-lg text-gray-300 mb-8">
          Commit to a daily workout—whether it’s weightlifting, running, or calisthenics. Move your body every day to build strength, endurance, and discipline.
        </p>
        <div className="text-left max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Why It's Important</h2>
          <p className="text-gray-300 mb-4">
            Exercise is a cornerstone of physical and mental health. Regular movement strengthens your body, clears your mind, and helps you build discipline.
          </p>
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">How to Get Started</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Start with a 30-minute workout each day.</li>
            <li>Incorporate strength training, cardio, and flexibility exercises.</li>
            <li>Set clear goals, such as running a 5k or doing 50 pushups.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function Read() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow text-center px-6 py-16">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Step 5: Read</h1>
        <p className="text-lg text-gray-300 mb-8">
          Transform your mind by learning from others. A habit of daily reading can change the course of your life.
        </p>

        <div className="text-left max-w-3xl mx-auto">
          {/* Why Reading is Essential */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Why Reading is Essential</h2>
          <img
            src="/images/reading-benefits.jpg"
            alt="Reading books"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-300 mb-4">
            Reading is one of the most powerful tools for growth. It allows you to learn from the experiences, successes, and failures of others. Through books, you can access decades of knowledge in just a few hours. Here’s why reading is critical for self-improvement:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li><strong>Learn from Experts:</strong> Books give you direct access to the minds of the greatest thinkers and practitioners in any field.</li>
            <li><strong>Expand Your Perspective:</strong> Reading exposes you to new ideas, ways of thinking, and strategies for success.</li>
            <li><strong>Improve Focus:</strong> The act of reading strengthens your concentration and ability to process information deeply.</li>
            <li><strong>Boost Your Skills:</strong> Reading books related to your goals helps you develop the expertise you need to excel.</li>
          </ul>

          {/* The Math: 15 Pages a Day */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">The Power of 15 Pages a Day</h2>
          <img
            src="/images/daily-reading.jpg"
            alt="Daily reading habit"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-300 mb-4">
            Reading just 15 pages a day might seem small, but it adds up quickly:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>At an average of 250 words per page, that’s 3,750 words a day.</li>
            <li>Over the course of a year, that’s about 1,368,750 words—equivalent to reading 18 books annually.</li>
            <li>Imagine the knowledge, insights, and ideas you could gain by committing to this simple habit!</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Small, consistent efforts compound over time. A daily reading habit is one of the simplest ways to set yourself apart and accelerate your growth.
          </p>

          {/* What to Read */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">What to Read</h2>
          <img
            src="/images/what-to-read.jpg"
            alt="What to read"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-300 mb-4">
            Choose books that align with your goals and interests. Here are some suggestions:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li><strong>Self-Improvement:</strong> Books on mindset, habits, and discipline (e.g., <em>Atomic Habits</em> by James Clear).</li>
            <li><strong>Skill Development:</strong> Read books specific to the skill you want to master (e.g., coding, art, or business).</li>
            <li><strong>Biographies:</strong> Learn from the successes and failures of great leaders and innovators.</li>
            <li><strong>Industry Insights:</strong> Stay updated on trends and best practices in your niche.</li>
            <li><strong>Fiction:</strong> Explore fiction to stimulate creativity and empathy.</li>
          </ul>

          {/* Tips to Build a Reading Habit */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Tips to Build a Reading Habit</h2>
          <img
            src="/images/reading-habit.jpg"
            alt="Reading habit"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-300 mb-4">
            Building a reading habit takes consistency and intention. Here are some tips to make it stick:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li><strong>Set a Time:</strong> Schedule a specific time each day for reading, such as before bed or in the morning.</li>
            <li><strong>Start Small:</strong> Begin with just 5–10 minutes a day and gradually increase.</li>
            <li><strong>Always Have a Book:</strong> Keep a book (or eBook) with you to make the most of downtime.</li>
            <li><strong>Track Your Progress:</strong> Use a journal or an app to log the books you’ve read.</li>
            <li><strong>Join a Community:</strong> Discuss what you’re reading with friends or join a book club to stay motivated.</li>
          </ul>

          {/* Benefits of Lifelong Learning */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">The Benefits of Lifelong Learning</h2>
          <p className="text-gray-300 mb-4">
            Reading isn’t just a habit; it’s a mindset. By committing to lifelong learning, you’ll:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Stay ahead in your field by continuously updating your knowledge.</li>
            <li>Develop critical thinking and problem-solving skills.</li>
            <li>Foster creativity and innovation by exploring new ideas.</li>
            <li>Achieve personal growth and fulfillment through constant improvement.</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Remember, the greatest investment you can make is in yourself. Reading is the foundation for building the life you want.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function Create() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow text-center px-6 py-16">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Step 4: Create</h1>
        <p className="text-lg text-gray-300 mb-8">
          Break free from the rat race. Pursue your passion, create value, and monetize your skills. 
        </p>

        <div className="text-left max-w-3xl mx-auto">
          {/* Why Creation Matters */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Why Create?</h2>
          <img
            src="/images/journal.jpg"
            alt="Creating value"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-300 mb-4">
            The key to true freedom is learning how to create something valuable. By identifying your passions and developing skills to serve others, you can break free from the monotony of working solely to pay bills. Creation isn't just about making money; it's about building something that resonates with your interests and provides value to others. Here’s why it matters:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li><strong>Financial Independence:</strong> Turn your skills and passions into a career you control.</li>
            <li><strong>Personal Fulfillment:</strong> Create something meaningful that aligns with your values.</li>
            <li><strong>Impact:</strong> Provide value to others on a larger scale and make a difference.</li>
          </ul>

          {/* Finding Your Passion */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">How to Find Your Passion</h2>
          <p className="text-gray-300 mb-4">
            Start by asking yourself:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>What do I genuinely enjoy doing? Think about hobbies, interests, and past experiences.</li>
            <li>What activities make me lose track of time?</li>
            <li>What value can I bring to others through this passion?</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Once you’ve identified your passion, the next step is to figure out how to monetize it. Look at the top 1% in your niche—what are they doing, and what skills have they developed? Use their success as a roadmap.
          </p>

          {/* Realistic Expectations */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Stay Realistic</h2>
          <p className="text-gray-300 mb-4">
            While it’s important to dream big, you also need to be practical. For example, if you love soccer, it’s unlikely you’ll play for Real Madrid—but you can still immerse yourself in the world of soccer by creating valuable content, coaching, or building soccer-related apps or tools. The key is to channel your passion into something achievable and impactful.
          </p>

          {/* Areas to Develop Skills */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Best Areas to Develop Skills</h2>
          <img
            src="/images/develop-skills.jpg"
            alt="Skill development"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-300 mb-4">
            Focus on skills that allow you to create something with broad value and monetization potential:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li><strong>Coding:</strong> Build websites, apps, or tools related to your passion (e.g., a golf app if you love golf).</li>
            <li><strong>Content Creation:</strong> Share your expertise through YouTube, blogs, or social media.</li>
            <li><strong>Design:</strong> Learn graphic or UI/UX design to create visually appealing projects.</li>
            <li><strong>Music and Art:</strong> Pursue creative passions and sell your work or teach others.</li>
            <li><strong>Writing:</strong> Author books, write blogs, or start a podcast on your niche.</li>
          </ul>

          {/* Key Questions to Ask Yourself */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Key Questions to Ask Yourself</h2>
          <p className="text-gray-300 mb-4">
            Before committing to developing a skill, ask these questions:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li><strong>Is the skill within my reach if I commit myself for the next year?</strong></li>
            <li><strong>How much value can this skill provide?</strong></li>
            <li>
              <strong>Does this align with my long-term vision?</strong> For example, becoming a personal trainer might feel limiting if you prefer broader impact—but creating content around fitness can reach thousands.
            </li>
          </ul>

          {/* How to Get Started */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">How to Get Started</h2>
          <p className="text-gray-300 mb-4">
            Start creating something every day. Whether it’s content, coding, artwork, music, or writing, consistency is the key to mastery. Here are some tips:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Dedicate time daily to practice and improve your skill.</li>
            <li>Set achievable milestones and celebrate small wins.</li>
            <li>Share your creations online to gather feedback and build an audience.</li>
            <li>Keep learning—study the top 1% in your niche and emulate their habits.</li>
            <li>Remember, progress is more important than perfection. Keep moving forward.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

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
          {/* Why It's Important */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Why Exercise Is Essential</h2>
          <p className="text-gray-300 mb-4">
            Exercise is more than just a way to stay in shape—it's a vital part of living a healthy, disciplined life. Consistent physical activity:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Improves cardiovascular health, reducing the risk of heart disease.</li>
            <li>Boosts mood and mental clarity by releasing endorphins and reducing stress.</li>
            <li>Strengthens muscles and bones, improving physical resilience and posture.</li>
            <li>Increases energy levels, helping you perform better in every aspect of life.</li>
            <li>Teaches discipline and commitment, two critical traits for success.</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Over the long term, exercise can lower the risk of chronic diseases, help maintain a healthy weight, and dramatically improve your quality of life.
          </p>

          {/* Long-Term Benefits */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Benefits of Long-Term Commitment</h2>
          <p className="text-gray-300 mb-4">
            By incorporating daily exercise into your life for an extended period, you’ll see exponential gains:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li><strong>Physical Mastery:</strong> You'll develop increased strength, flexibility, and stamina.</li>
            <li><strong>Mental Resilience:</strong> Pushing through tough workouts trains your mind to handle adversity in other areas.</li>
            <li><strong>Longevity:</strong> A consistent exercise routine contributes to a longer, healthier life.</li>
            <li><strong>Increased Confidence:</strong> Achieving fitness goals improves your self-image and builds unshakable confidence.</li>
          </ul>

          {/* How to Perform the Challenge */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">How to Perform the Challenge</h2>
          <p className="text-gray-300 mb-4">
            The goal of this step is to move your body every single day. Here’s how you can structure it:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li><strong>Set a Minimum Duration:</strong> Start with at least 30 minutes of activity per day. Gradually increase this as you progress.</li>
            <li><strong>Mix It Up:</strong> Incorporate a variety of workouts to target different aspects of fitness, such as:
              <ul className="list-disc list-inside ml-4">
                <li>Strength Training: Build muscle with weightlifting or bodyweight exercises (pushups, pullups, squats).</li>
                <li>Cardio: Improve heart health with running, cycling, or swimming.</li>
                <li>Flexibility: Stretching or yoga to enhance mobility and prevent injuries.</li>
              </ul>
            </li>
            <li><strong>Rest Actively:</strong> On days you feel tired, engage in light activities like walking or stretching.</li>
            <li><strong>Track Your Progress:</strong> Keep a journal or use a fitness app to monitor your performance and improvements.</li>
          </ul>

          {/* Tips to Stick to It */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Tips to Stick to the Challenge</h2>
          <p className="text-gray-300 mb-4">
            Staying consistent with daily exercise can be tough, but these tips will help you keep going:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li><strong>Create a Routine:</strong> Schedule your workouts at the same time every day to build a habit.</li>
            <li><strong>Start Small:</strong> If you're new to exercise, focus on short, manageable sessions and build up over time.</li>
            <li><strong>Find Accountability:</strong> Partner with a friend or join a fitness community to stay motivated.</li>
            <li><strong>Make It Fun:</strong> Choose activities you enjoy, such as hiking, dancing, or playing a sport.</li>
            <li><strong>Prepare in Advance:</strong> Lay out your workout clothes and plan your session the night before.</li>
            <li><strong>Reward Yourself:</strong> Celebrate milestones with small, non-food rewards like new gear or a relaxing massage.</li>
          </ul>
          <p className="text-gray-300">
            Remember, the hardest part is starting. Once you build momentum, daily exercise will become a natural part of your routine.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

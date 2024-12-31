import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function Carnivore() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow text-center px-6 py-16">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Step 2: Carnivore Diet</h1>
        <p className="text-lg text-gray-300 mb-8">
          Embrace the power of a clean, meat-based diet to fuel your body and mind with strength and clarity.
        </p>

        <div className="text-left max-w-3xl mx-auto">
          {/* Why It's Important */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Why the Carnivore Diet?</h2>
          <img
            src="/images/Carnivore.jpg"
            alt="Steak"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-300 mb-4">
            The carnivore diet focuses on consuming nutrient-dense animal products while eliminating processed foods, grains, and sugars. Here's why it's worth considering:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Provides essential nutrients like protein, iron, and omega-3 fatty acids.</li>
            <li>Helps stabilize blood sugar levels and reduces inflammation.</li>
            <li>Improves energy, focus, and mental clarity by cutting out unnecessary carbs.</li>
            <li>Encourages a clean, simple approach to eating with fewer cravings.</li>
          </ul>

          {/* Long-Term Benefits */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Benefits of Long-Term Commitment</h2>
          
          <p className="text-gray-300 mb-4">
            Following the carnivore diet over a long period can lead to significant health improvements:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li><strong>Weight Loss:</strong> Encourages fat burning and lean muscle preservation.</li>
            <li><strong>Improved Digestion:</strong> Reduces bloating and other digestive issues caused by processed foods.</li>
            <li><strong>Clear Skin:</strong> Eliminates foods that trigger acne and other skin conditions.</li>
            <li><strong>Stable Energy Levels:</strong> No sugar crashes—just sustained energy throughout the day.</li>
          </ul>

          {/* How to Perform the Challenge */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">How to Perform the Challenge</h2>
          <img
            src="/images/Steak.jpg"
            alt="Steak - a staple in the carnivore diet"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-300 mb-4">
            The goal is to fuel your body with high-quality animal products. Here’s how to get started:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li><strong>Eat Meat Daily:</strong> Prioritize high-quality meats such as beef, lamb, pork, and poultry.</li>
            <li><strong>Incorporate Fats:</strong> Include healthy animal fats like butter, tallow, and fatty cuts of meat.</li>
            <li><strong>Hydrate Well:</strong> Drink plenty of water and consider electrolytes for balance.</li>
            <li><strong>Eliminate Processed Foods:</strong> Remove sugar, grains, and processed oils from your diet.</li>
            <li><strong>Track Your Progress:</strong> Note how your energy, digestion, and overall health improve over time.</li>
          </ul>

          {/* Tips to Stick to It */}
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Tips to Stick to the Challenge</h2>
          <p className="text-gray-300 mb-4">
            Sticking to the carnivore diet can be challenging, but these tips will help:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li><strong>Plan Your Meals:</strong> Meal prep your meats and have quick options like hard-boiled eggs or cooked steak on hand.</li>
            <li><strong>Embrace Simplicity:</strong> Keep meals simple with just salt, pepper, and quality cuts of meat.</li>
            <li><strong>Stay Social:</strong> Learn how to eat out by choosing simple meat-based dishes at restaurants.</li>
            <li><strong>Focus on Results:</strong> Track how you feel to stay motivated by the improvements in your health and energy.</li>
            <li><strong>Be Patient:</strong> It takes time for your body to adjust to this way of eating—trust the process.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

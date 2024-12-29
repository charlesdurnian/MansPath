import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog() {
    const posts = [
      { id: 1, title: "Why Daily Discipline Matters", date: "Dec 28, 2024" },
      { id: 2, title: "Mastering the Carnivore Diet", date: "Dec 20, 2024" },
      { id: 3, title: "How to Build Skills That Last", date: "Dec 15, 2024" },
    ];
  
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
            Blog
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-400">{post.date}</p>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  

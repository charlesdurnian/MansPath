export default function Navbar() {
    return (
      <nav className="bg-black text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">
            <a href="/">Men's Path</a>
          </h1>
          <ul className="flex space-x-6 text-lg">
            <li>
              <a href="/about" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-400">Blog</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
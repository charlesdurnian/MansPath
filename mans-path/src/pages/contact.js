import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Get in touch with us for any questions or feedback.
        </p>
      </main>
      <Footer />
    </div>
  );
}

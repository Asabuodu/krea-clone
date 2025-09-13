import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Generate from "../components/Generate";

export default function Home() {
  return (
    <main className=" bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Generate />
      <footer className="text-center py-6 text-gray-500 border-t">
        <p>Krea AI — curated by Mobbin</p>
      </footer>
    </main>
  );
}

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Projects />
        <section className="bg-black py-12 text-center text-white/50">
          <p className="text-sm">© {new Date().getFullYear()} CyberGuard — Securing what matters.</p>
        </section>
      </main>
    </div>
  );
}

export default App;

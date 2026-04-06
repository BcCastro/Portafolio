import Navbar from "./componentes/Navbar";
import Hero from "./secciones/Hero";
import Projects from "./secciones/Projects";
import Contact from "./secciones/Contact";
import Footer from "./secciones/Footer";

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />

      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/573001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        💬
      </a>
    </div>
  );
}

export default App;
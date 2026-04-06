import { motion } from "framer-motion";

export default function Projects() {
 const projects = [
  {
    title: "Plataforma de análisis con enfoque de género",
    desc: "Aplicación web para visualización y análisis de datos con enfoque de género, permitiendo identificar brechas y generar insights.",
  },

  {
    title: "Pokedex interactiva",
    desc: "Aplicación que consume API de Pokémon...",
  },

  {
    title: "Dashboard de criptomonedas",
    desc: "App en tiempo real...",
  },



  

];

  return (
    <section id="projects" className="py-20 px-6">

      <h2 className="text-3xl text-center mb-10">
        Proyectos
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-6 rounded-xl transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
          >
            <h3 className="text-xl mb-2">{p.title}</h3>
            <p className="text-gray-400">{p.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
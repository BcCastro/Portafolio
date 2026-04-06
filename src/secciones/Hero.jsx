import { motion } from "framer-motion";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
   <section id="home" className="h-screen flex items-center justify-center text-center px-6">
      
      <div className="flex flex-col items-center gap-6">

        <motion.img
          src={profile}
          alt="Camilo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 rounded-full border-4 border-cyan-400 object-cover"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold"
        >
          Hola, soy<span className="text-cyan-400 animate-pulse drop-shadow-[0_0_15px_#22d3ee]"> Camilo Castro
</span>
        </motion.h1>

       <motion.p
  initial={{ opacity: 0, y: 19}}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="text-gray-400 text-lg"
>
  Analista Desarrollador 🚀
</motion.p>
      </div>

    </section>
  );
}
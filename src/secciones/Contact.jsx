export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 text-center"
    >
      <h2 className="text-3xl font-bold mb-6">
        Trabajemos juntos
      </h2>

      <p className="text-gray-400 mb-6">
        ¿Tienes un proyecto en mente? Estoy disponible para ayudarte.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        {/* Email */}
        <a
          href="mailto:bhcastro1101@gmail.com"
          className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Enviar email
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/573001819714"
          target="_blank"
          className="border border-gray-600 px-6 py-3 rounded-lg hover:border-cyan-400 transition"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}
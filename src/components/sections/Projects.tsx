import RevealOnScroll from "../RevealOnScroll";

export const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent text-center">
            {""}
            Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow[0_2px_8px_rgba(59,1302246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> BoatMaster </h3>
              <p className="text-gray-400 mb-4">
                {" "}
                Boatmaster is a smart platform for managing marine services, and
                crew support
              </p>
              <div>
                {["HTML", "PHP", "Codeigniter"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 mb-2 rounded-full text-sm hover:bg-green-500/20
                                  hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project */}
              <div className="flex justify-between items-center">
                <a
                  href="https://expo1.lab-trpl.id/home"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  {" "}
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

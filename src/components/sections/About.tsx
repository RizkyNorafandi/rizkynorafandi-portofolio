import RevealOnScroll from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["Html", "TailwindCSS", "React"];

  const backendSkills = ["Python", "PHP"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-28"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent text-center">
            {""}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              tempore fugiat sunt molestias ipsa explicabo accusantium quod?
              Corporis, placeat quia. Aperiam magni molestiae vel officiis
              asperiores, quae aliquam dolorum incidunt?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl 6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">FrontEnd</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/30
                                  hover:shadow[0_2px_8px_rgba(59,1302246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl 6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                  hover:shadow[0_2px_8px_rgba(59,1302246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

import RevealOnScroll from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent leading-right">
            Hi, i'm RizkyNorafandi
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            From my first 'Hello World' to exploring the latest frameworks—to
            me, coding is like an endlessly fun puzzle. The challenge? Working
            on what I can't do... until I can!
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#project"
              className="bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
            hover:shadow[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Project
            </a>

            <a
              href="#contact"
              className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 
            hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(59,130,246,0.2)] hover:bg-green-500/10"
            >
              Contact ME
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

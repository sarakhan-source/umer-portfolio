export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            Umer<span className="text-gray-500">.</span>
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-20 relative overflow-hidden"
      >

        {/* Background Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.06] blur-[140px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-5xl">

            <p className="text-sm uppercase tracking-[0.4em] text-gray-500 mb-8">
              Web Developer · Designer · Creator
            </p>

  <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold leading-[0.85] tracking-[-0.06em]">
  I create
  <br />
  <span className="text-gray-500">digital</span>
  <br />
  experiences.
</h2>

            <p className="mt-10 max-w-xl text-lg md:text-xl text-gray-400 leading-relaxed">
              I’m Umer Khan — a web developer focused on building
bold, modern and high-performance digital experiences
that turn ideas into something people remember.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 hover:bg-gray-200 transition-all duration-300"
              >
                View My Work →
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-8 left-6 right-6 flex justify-between text-xs text-gray-600 uppercase tracking-widest">
          <span>Based in Pakistan</span>
          <span className="animate-bounce">Scroll to explore ↓</span>
        </div>

      </section>

     {/* ABOUT */}
<section id="about" className="border-t border-white/10 py-32">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-sm uppercase tracking-[0.4em] text-gray-500 mb-16">
      About Me
    </p>

    <div className="grid md:grid-cols-2 gap-16 md:gap-24">

      {/* LEFT */}
      <div>
        <h3 className="text-4xl md:text-6xl font-semibold leading-tight">
          I build digital experiences with
          <span className="text-gray-500">
            {" "}purpose, precision and personality.
          </span>
        </h3>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col justify-between">

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          I’m a passionate web developer focused on creating modern,
          responsive and meaningful digital experiences. I enjoy turning
          ideas into clean interfaces that look great and feel even better
          to use.
        </p>

        <p className="mt-8 text-lg md:text-xl text-gray-500 leading-relaxed">
          My approach combines thoughtful design, modern technology and
          attention to detail to create websites that are fast, functional
          and memorable.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
          <div>
            <p className="text-3xl font-semibold">01</p>
            <p className="mt-2 text-sm text-gray-500">
              Design & UI
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">02</p>
            <p className="mt-2 text-sm text-gray-500">
              Web Development
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">03</p>
            <p className="mt-2 text-sm text-gray-500">
              Responsive Design
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">04</p>
            <p className="mt-2 text-sm text-gray-500">
              Creative Thinking
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* SKILLS */}
<section id="skills" className="border-t border-white/10 py-32">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-16 items-start">

      {/* LEFT */}
      <div>
        <p className="text-sm uppercase tracking-[0.4em] text-gray-500 mb-8">
          What I Use
        </p>

        <h3 className="text-4xl md:text-6xl font-semibold leading-tight">
          Tools that turn
          <span className="text-gray-500"> ideas into reality.</span>
        </h3>

        <p className="mt-8 max-w-lg text-gray-500 text-lg leading-relaxed">
          I work with modern technologies to build fast, responsive and
          visually engaging digital experiences.
        </p>
      </div>

      {/* RIGHT */}
      <div className="grid sm:grid-cols-2 gap-4">

        <div className="group border border-white/10 rounded-2xl p-7 hover:bg-white hover:text-black transition-all duration-300">
          <p className="text-sm text-gray-500 group-hover:text-black/60 mb-8">
            01
          </p>
          <h4 className="text-2xl font-medium">Next.js</h4>
          <p className="mt-2 text-sm text-gray-500 group-hover:text-black/60">
            Modern React framework
          </p>
        </div>

        <div className="group border border-white/10 rounded-2xl p-7 hover:bg-white hover:text-black transition-all duration-300">
          <p className="text-sm text-gray-500 group-hover:text-black/60 mb-8">
            02
          </p>
          <h4 className="text-2xl font-medium">React</h4>
          <p className="mt-2 text-sm text-gray-500 group-hover:text-black/60">
            Interactive interfaces
          </p>
        </div>

        <div className="group border border-white/10 rounded-2xl p-7 hover:bg-white hover:text-black transition-all duration-300">
          <p className="text-sm text-gray-500 group-hover:text-black/60 mb-8">
            03
          </p>
          <h4 className="text-2xl font-medium">TypeScript</h4>
          <p className="mt-2 text-sm text-gray-500 group-hover:text-black/60">
            Reliable development
          </p>
        </div>

        <div className="group border border-white/10 rounded-2xl p-7 hover:bg-white hover:text-black transition-all duration-300">
          <p className="text-sm text-gray-500 group-hover:text-black/60 mb-8">
            04
          </p>
          <h4 className="text-2xl font-medium">JavaScript</h4>
          <p className="mt-2 text-sm text-gray-500 group-hover:text-black/60">
            Dynamic web experiences
          </p>
        </div>

        <div className="group border border-white/10 rounded-2xl p-7 hover:bg-white hover:text-black transition-all duration-300">
          <p className="text-sm text-gray-500 group-hover:text-black/60 mb-8">
            05
          </p>
          <h4 className="text-2xl font-medium">Tailwind CSS</h4>
          <p className="mt-2 text-sm text-gray-500 group-hover:text-black/60">
            Modern responsive styling
          </p>
        </div>

        <div className="group border border-white/10 rounded-2xl p-7 hover:bg-white hover:text-black transition-all duration-300">
          <p className="text-sm text-gray-500 group-hover:text-black/60 mb-8">
            06
          </p>
          <h4 className="text-2xl font-medium">UI Design</h4>
          <p className="mt-2 text-sm text-gray-500 group-hover:text-black/60">
            Clean visual systems
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* PROJECTS */}

      <section id="projects" className="border-t border-white/10 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.4em] text-gray-500 mb-12">
            Selected Projects
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="group border border-white/10 rounded-3xl p-8 min-h-[300px] hover:bg-white hover:text-black transition">
              <p className="text-sm opacity-50 mb-20">01</p>
              <h4 className="text-4xl font-semibold">Portfolio Website</h4>
              <p className="mt-3 opacity-60">
                Modern web experience
              </p>
            </div>

            <div className="group border border-white/10 rounded-3xl p-8 min-h-[300px] hover:bg-white hover:text-black transition">
              <p className="text-sm opacity-50 mb-20">02</p>
              <h4 className="text-4xl font-semibold">Creative Landing Page</h4>
              <p className="mt-3 opacity-60">
                Creative digital product
              </p>
            </div>

          </div>
        </div>
      </section>

     {/* CONTACT */}
<section id="contact" className="border-t border-white/10 py-32">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-sm uppercase tracking-[0.4em] text-gray-500 mb-10">
      Get In Touch
    </p>

    <div className="grid md:grid-cols-2 gap-16 items-end">

      <div>
        <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
          Let's build
          <br />
          <span className="text-gray-500">something great.</span>
        </h3>
      </div>

      <div className="md:pb-2">

        <p className="text-lg text-gray-500 leading-relaxed max-w-md">
          Have an idea, project or opportunity in mind?
          Let’s create something meaningful together.
        </p>

        <a
          href="mailto:hello@example.com"
          className="inline-block mt-8 text-xl md:text-2xl border-b border-white/30 pb-2 hover:border-white hover:text-gray-300 transition-all duration-300"
        >
          hello@example.com →
        </a>

        <div className="mt-10 flex gap-6 text-sm text-gray-500">
          <a
            href="#"
            className="hover:text-white transition"
          >
            GitHub ↗
          </a>

          <a
            href="#"
            className="hover:text-white transition"
          >
            LinkedIn ↗
          </a>

          <a
            href="#"
            className="hover:text-white transition"
          >
            Instagram ↗
          </a>
        </div>

      </div>

    </div>
  </div>
</section>
      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-between text-sm text-gray-500">
          <span>© 2026 Umer Khan</span>
          <span>Built with Next.js</span>
        </div>
      </footer>

    </main>
  );
}
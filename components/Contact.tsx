export default function Contact() {
    return (
      <section id="contact" className="py-32">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Get In Touch
        </h2>
  
        <div className="max-w-2xl mx-auto border border-slate-800 rounded-xl p-10 text-center bg-[#0a192f] hover:border-[#64ffda] transition">
          <p className="text-slate-400 leading-7">
            I’m currently looking for opportunities in Software Engineering,
            Cloud Engineering, and AI Engineering roles across Germany.
            Feel free to reach out for collaborations or opportunities.
          </p>
  
          {/* Email */}
          <div className="mt-8">
            <p className="text-[#64ffda] text-lg">
              abhiramnishchal@gmail.com
            </p>
  
            <button
              onClick={() =>
                navigator.clipboard.writeText("abhiramnishchal@gmail.com")
              }
              className="mt-3 text-sm text-slate-400 hover:text-[#64ffda] transition"
            >
              Copy email
            </button>
          </div>
  
          {/* Links */}
          <div className="mt-8 flex justify-center gap-6 text-slate-400">
            <a
              href="https://github.com/GoliBhai"
              target="_blank"
              className="hover:text-[#64ffda] transition"
            >
              GitHub
            </a>
  
            <a
              href="www.linkedin.com/in/sai-nishchal-gamini-538482172"
              target="_blank"
              className="hover:text-[#64ffda] transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    );
  }
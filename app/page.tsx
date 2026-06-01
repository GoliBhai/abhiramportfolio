"use client";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0a192f] text-[#ccd6f6]">
        <div className="max-w-6xl mx-auto px-6">
          <section className="min-h-screen flex flex-col justify-center">
            <p className="text-[#64ffda] mb-4">
              Hi, I'm
            </p>

            <h1 className="text-7xl font-bold">
              Sai Nishchal
            </h1>

            <h3 className="text-5xl text-slate-400 mt-4">
              Cloud Computing • AI Systems • Full-Stack Development
            </h3>

            <p className="max-w-xl mt-8 text-slate-400">
              Master's student in Computer Science with professional
              experience in Google Cloud Platform, passionate about developing AI-driven
              applications and scalable web solutions.
            </p>

            <div className="mt-10">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume.pdf";
                  link.download = "Sai_Nishchal_Gamini.pdf";
                  link.click();
                }}
                className="bg-[#64ffda] text-black px-6 py-3 rounded hover:opacity-80 transition"
              >
                Download CV
              </button>
            </div>
          </section>

          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />

        </div>
      </main>
    </>
  );
}
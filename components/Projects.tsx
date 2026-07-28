"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Multimodal Conversational AI (RAG System)",
      paperLink: "https://aclanthology.org/2025.clicit-1.36/",
      description:
        "NLP-based multimodal RAG system with intent classification, dense + graph-based retrieval, STT/TTS integration, and LLM-based response generation. Achieved 90% retrieval accuracy, improved to 99% with graph-based re-ranking.",
      tech: ["React", "JavaScript", "Milvus", "LangChain", "LLMs", "NLP"],
      impact: ["99% retrieval accuracy", "Graph-based reranking", "Multimodal AI"],
    },
    {
      title: "Explainable AI (VAE + CNN Architecture)",
      description:
        "Built a disentangled Variational Autoencoder with CNN backbone and integrated multiple XAI techniques including Grad-CAM and latent space analysis. Achieved 100% classification accuracy in evaluation.",
      tech: ["PyTorch", "CNN", "VAE", "XAI", "Grad-CAM", "Docker"],
      impact: ["100% accuracy", "XAI interpretability", "Dockerized training"],
    },
    {
      title: "Community Interaction Platform (Full-Stack Web Application)",
      description:
        "Developed a full-stack community platform featuring user authentication, content sharing, and responsive interfaces. Built reusable React components, integrated RESTful APIs with a Node.js backend, and implemented modular, maintainable software architecture using TypeScript and MongoDB.",
      tech: [
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "REST API",
        "Git",
      ],
      impact: [
        "Responsive UI",
        "Reusable components",
        "Modular architecture",
      ],
    },
    {
      title: "Persistent Memory Systems Analysis",
      description:
        "Analyzed 261 research papers to identify performance trends in persistent memory systems. Built structured benchmarking framework and visualization pipeline for comparative analysis.",
      tech: ["Python", "Pandas", "Matplotlib", "Research", "Data Analysis"],
      impact: ["261 papers analyzed", "Benchmark framework", "Trend discovery"],
    },
  ];

  return (
    <section id="projects" className="py-32">
      <h2 className="text-3xl font-bold mb-12">
        Featured Projects
      </h2>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group border border-slate-800 p-6 rounded-xl transition-all duration-300 hover:border-[#64ffda] hover:shadow-[0_0_25px_rgba(100,255,218,0.15)]"
          >
            {/* Title + Paper */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#64ffda]">
                {project.title}
              </h3>

              {project.paperLink && (
                <a
                  href={project.paperLink}
                  target="_blank"
                  className="text-sm text-slate-400 hover:text-[#64ffda] transition"
                >
                  Paper ↗
                </a>
              )}
            </div>

            {/* Description */}
            <p className="text-slate-400 mt-4 leading-7">
              {project.description}
            </p>

            {/* Impact badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.impact.map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1 rounded-full bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/20"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Tech stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 bg-slate-800 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
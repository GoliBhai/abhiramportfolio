export default function Skills() {
    const skillGroups = [
      {
        title: "Programming",
        skills: [
          "Python",
          "Java",
          "C++",
          "SQL",
          "Bash",
        ],
      },
  
      {
        title: "AI & Machine Learning",
        skills: [
          "RAG",
          "LLMs",
          "Embeddings",
          "NLP",
          "Agentic AI",
          "XAI",
          "PyTorch",
          "Transformers",
          "LangChain",
          "Scikit-Learn",
        ],
      },
  
      {
        title: "Backend",
        skills: [
          "Spring Boot",
          "REST APIs",
          "Node.js",
          "Flask",
          "Microservices",
        ],
      },
  
      {
        title: "Frontend",
        skills: [
          "React",
          "JavaScript",
          "Next.js",
          "HTML",
          "CSS",
          "Bootstrap",
        ],
      },
  
      {
        title: "Cloud & DevOps",
        skills: [
          "Google Cloud: Monitoring, Logging, Migration, IAM",
          "AWS (Basics)",
          "Kubernetes",
          "Docker",
          "BigQuery",
          "Cloud ",
          "Linux",
          "Git",
        ],
      },
  
      {
        title: "Databases",
        skills: [
          "MySQL",
          "MongoDB",
          "Milvus",
          "Cloud Firestore",
          "Cloud Bigtable",
        ],
      },
    ];
  
    return (
      <section
        id="skills"
        className="py-32"
      >
        <h2 className="text-3xl font-bold mb-12">
          Skills
        </h2>
  
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border border-slate-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-[#64ffda] mb-4">
                {group.title}
              </h3>
  
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-slate-800 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
export default function Experience() {
    return (
      <section
        id="experience"
        className="py-32"
      >
        <h2 className="text-3xl font-bold mb-12">
          Experience
        </h2>
  
        <div className="space-y-12">
  
          <div>
            <h3 className="text-xl font-semibold">
              Google Cloud Infrastructure Engineer
            </h3>
  
            <p className="text-[#64ffda]">
              Infosys • Dec 2021 – Dec 2023
            </p>
  
            <ul className="mt-4 text-slate-400 space-y-2">
              <li>
                Supported Google Cloud infrastructure,
                Linux systems, IAM, logging and monitoring.
              </li>
  
              <li>
                Managed incidents across Compute Engine
                Linux VMs and Kubernetes environments.
              </li>
  
              <li>
                Assisted cloud migration projects from
                on-premise Linux environments to GCP.
              </li>
  
              <li>
                Improved observability, system reliability,
                and access control practices.
              </li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold">
              Cloud Infrastructure Trainee
            </h3>
  
            <p className="text-[#64ffda]">
              Infosys • Sep 2021 – Dec 2021
            </p>
  
            <ul className="mt-4 text-slate-400 space-y-2">
              <li>
                Completed hands-on cloud training using
                Qwiklabs.
              </li>
  
              <li>
                Worked with IAM, Linux, Terraform,
                Kubernetes and Compute Engine.
              </li>
  
              <li>
                Simulated cloud migration projects and
                infrastructure deployment.
              </li>
            </ul>
          </div>
  
        </div>
      </section>
    );
  }
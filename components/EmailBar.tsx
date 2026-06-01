export default function EmailBar() {
    return (
      <div className="fixed right-10 bottom-0 hidden lg:flex flex-col items-center gap-6">
  
        <a
          href="mailto:abhiramnishchal@gmail.com"
          className="[writing-mode:vertical-rl]"
        >
          your@email.com
        </a>
  
        <div className="w-px h-24 bg-slate-500" />
  
      </div>
    );
  }
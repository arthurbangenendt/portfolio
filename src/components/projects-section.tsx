import { projects } from "@/lib/projects-data";
import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Projects
        </h2>
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

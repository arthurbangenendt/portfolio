import type { Project } from "@/lib/projects-data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border border-border rounded-xl p-6 md:p-8 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
          {project.name}
        </h3>
        {project.role === "collaboration" && project.collaborators && (
          <span className="text-sm text-muted-foreground border border-border rounded-full px-3 py-1">
            Built with {project.collaborators.map((c) => c.name).join(", ")}
          </span>
        )}
      </div>

      <p className="text-muted-foreground">{project.tagline}</p>
      <p>{project.description}</p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground list-disc list-inside">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 pt-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium border border-border rounded-full px-3 py-1 text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.links.length > 0 && (
        <div className="flex flex-wrap gap-3 pt-2">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

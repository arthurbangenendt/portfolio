import { projects } from "@/lib/projects-data";
import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() { return <section id="projects" className="projects-section"><div className="section-shell"><div className="section-intro"><p className="kicker">PROJETOS SELECIONADOS</p><h2>Software que resolve<br />trabalho de verdade.</h2><p>Do fluxo operacional à arquitetura que o sustenta. Cada case mostra contexto, escopo e as escolhas técnicas que fazem o produto continuar de pé.</p></div><div className="projects-list">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></div></section>; }

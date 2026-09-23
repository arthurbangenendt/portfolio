import { ArrowUpRight, Check, Clock3, Code2 } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/projects-data";

function ProjectPreview({ project }: { project: Project }) {
  const isFrioHub = project.slug === "friohub";
  const screenshot = isFrioHub
    ? { src: "/projects/friohub-painel-profissional.png", alt: "Painel profissional do FrioHub em ambiente de testes", width: 3406, height: 1908, caption: "Tela real do produto · painel profissional em testes" }
    : { src: "/projects/np-vendas-processos.png", alt: "Tela de processos e automações do Coolstack", width: 3398, height: 1898, caption: "Tela real do produto · processos e automações" };

  return <figure className="project-preview"><div className="project-screenshot"><Image src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} sizes="(max-width: 720px) 100vw, 50vw" /></div><figcaption className="preview-caption">{screenshot.caption}</figcaption></figure>;
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className="project-case" id={project.slug}><div className="case-topline"><span>0{index + 1}</span><span>{project.eyebrow}</span></div><div className="case-layout"><div className="case-content"><h3>{project.name}</h3><p className="case-description">{project.description}</p><div className="case-meta"><div><Clock3 size={16} /><span><b>Período</b>{project.period}</span></div><div><Code2 size={16} /><span><b>{project.role}</b>TypeScript end-to-end</span></div></div><ul className="case-outcomes">{project.outcomes.map((outcome) => <li key={outcome}><Check size={16} />{outcome}</li>)}</ul><div className="tech-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>{project.links.length > 0 && <div className="case-links">{project.links.map((link) => <a key={link.label} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>{link.label}<ArrowUpRight size={16} /></a>)}</div>}</div><ProjectPreview project={project} /></div></article>;
}

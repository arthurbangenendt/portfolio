import Image from "next/image";

const principles = [["Produto antes de feature", "Começo pelo gargalo operacional e traduzo o problema em uma experiência que o time realmente usa."], ["Arquitetura com consequência", "Tipos, migrações, permissões e observabilidade são parte da entrega — não uma etapa que fica para depois."], ["IA aplicada, não decorativa", "Uso LLMs e MCP quando eles reduzem trabalho manual, melhoram contexto ou aumentam velocidade de decisão."], ["Responsabilidade de ponta a ponta", "Do desenho da interface ao deploy, documentação e evolução segura do sistema."]];

export function AboutSection() {
  return <section id="about" className="about-section about-section--portrait">
    <div className="about-portrait" aria-hidden="true"><Image src="/arthur-portrait.jpeg" alt="" fill sizes="100vw" priority /></div>
    <div className="about-shade" aria-hidden="true" />
    <div className="section-shell about-portrait-grid">
      <div className="about-title"><p className="kicker">SOBRE MIM · 01</p><h2>Construo<br />software<br /><em>com intenção.</em></h2><p className="about-scroll-note">role para explorar <span>↓</span></p></div>
      <div className="about-copy about-copy--portrait"><p>Sou Arthur Benjamin, desenvolvedor full-stack focado em produtos digitais para climatização. Gosto de sistemas em que uma boa decisão técnica vira menos atrito para quem vende, instala e atende.</p><div className="principles">{principles.map(([title, body], i) => <div key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></div>)}</div></div>
    </div>
  </section>;
}

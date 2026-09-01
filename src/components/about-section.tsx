const principles = [
  {
    heading: "TypeScript-first",
    body: "Todo o stack, do banco à interface, tipado ponta a ponta — menos bugs descobertos em produção.",
  },
  {
    heading: "Next.js + Supabase como padrão",
    body: "Full-stack em um único fluxo: auth, banco, storage e realtime sem costurar serviços separados.",
  },
  {
    heading: "Disciplina de documentação",
    body: "Decisões de arquitetura viram ADRs, incidentes viram runbooks, e o time sabe o porquê de cada escolha.",
  },
  {
    heading: "IA como ferramenta de produto",
    body: "Integrações com LLMs e protocolos de agente (MCP) construídas como parte do produto, não como demo.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          About
        </h2>
        <p className="text-lg text-muted-foreground">
          Sou engenheiro full-stack. Construo software de produção para o
          setor de climatização — marketplaces, sistemas de vendas e as
          ferramentas de IA que rodam por trás deles.
        </p>
        <dl className="grid gap-6 sm:grid-cols-2">
          {principles.map((principle) => (
            <div key={principle.heading} className="flex flex-col gap-1.5">
              <dt className="font-semibold">{principle.heading}</dt>
              <dd className="text-sm text-muted-foreground">
                {principle.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

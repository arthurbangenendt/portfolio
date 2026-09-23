export type ProjectTone = "blue" | "orange";

export interface Project {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  period: string;
  role: string;
  stack: string[];
  outcomes: string[];
  links: { label: string; href: string; external?: boolean }[];
  tone: ProjectTone;
}

export const projects: Project[] = [
  {
    slug: "friohub",
    name: "FrioHub",
    eyebrow: "Marketplace HVAC · ambiente de testes",
    description: "Marketplace em validação que reduz a fricção entre quem precisa de climatização, profissionais e distribuidoras. A experiência cobre descoberta do serviço, recomendação, comparação e acompanhamento em uma única operação.",
    period: "11 ago — 11 set 2026 · ciclo registrado",
    role: "Full-stack · produto, arquitetura e entrega",
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Postgres", "Tailwind CSS"],
    outcomes: ["Autenticação, perfis e permissões para clientes, profissionais e distribuidoras", "Matching territorial, agenda, mensagens, financeiro e rastreio de serviços", "299 contratos pgTAP para schema e regras de acesso, além de ADRs e SLOs documentados"],
    links: [{ label: "Abrir ambiente de testes", href: "https://friohub.vercel.app", external: true }, { label: "Código", href: "https://github.com/arthurbangenendt/friohub", external: true }],
    tone: "orange",
  },
  {
    slug: "np-vendas",
    name: "Coolstack",
    eyebrow: "CRM multi-tenant · operação comercial HVAC",
    description: "Sistema operacional para uma operação comercial de climatização: da primeira conversa ao pedido, financeiro, estoque, manutenção e pós-venda. Construído em parceria com Hebert Reis.",
    period: "15 set 2025 — em evolução",
    role: "Full-stack · em colaboração com Hebert Reis",
    stack: ["Next.js 15", "TypeScript", "Supabase", "Zustand", "TanStack", "OpenAI", "MCP"],
    outcomes: ["CRM, propostas, pedidos, financeiro, estoque e manutenção conectados ao fluxo comercial", "Portal público de rastreio e automações que aproximam operação, equipe e cliente final", "Copiloto no WhatsApp e gateway MCP/OpenAPI para agentes de IA operarem sobre APIs do produto"],
    links: [],
    tone: "blue",
  },
];

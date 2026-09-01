export type ProjectRole = "solo" | "collaboration";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: ProjectRole;
  collaborators?: { name: string; note?: string }[];
  stack: string[];
  highlights?: string[];
  links: { label: string; href: string; external?: boolean }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "friohub",
    name: "FrioHub",
    tagline:
      "Marketplace de climatização em São Paulo — orçamentos, profissionais e venda de equipamentos em uma plataforma só.",
    description:
      "Conecta clientes que precisam de instalação e manutenção de ar-condicionado a profissionais de climatização, com comparação de propostas e venda de equipamentos via dropship de distribuidores. Construído sozinho, do schema do banco à operação em produção.",
    role: "solo",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "OpenAI SDK",
      "Framer Motion",
      "PostHog",
    ],
    highlights: [
      "Decisões de arquitetura registradas como ADRs",
      "Contratos de banco de dados testados com pgTAP no CI",
      "Runbook de incidentes e SLOs documentados",
      "Política de zero migration manual — todo schema muda via CI",
    ],
    links: [],
    featured: true,
  },
  {
    slug: "np-vendas",
    name: "NP Vendas",
    tagline:
      "Plataforma de vendas e CRM multi-tenant para uma empresa de HVAC, construída em parceria com Hebert Reis.",
    description:
      "Sistema completo de operação comercial: clientes, propostas, pedidos, financeiro, estoque, manutenção com portal público de rastreamento, kanban, automações e um copiloto de IA no WhatsApp. Inclui um gateway MCP/OpenAPI que expõe as próprias APIs do sistema para agentes de IA.",
    role: "collaboration",
    collaborators: [{ name: "Hebert Reis" }],
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "TanStack Query/Table",
      "React Hook Form + Zod",
      "Supabase",
      "Model Context Protocol SDK",
      "OpenAI SDK",
    ],
    highlights: [
      "Gateway MCP/OpenAPI expondo as APIs do sistema para agentes de IA",
      "Copiloto de IA no WhatsApp para o time de vendas",
      "Portal público de rastreamento de pedidos para clientes finais",
    ],
    links: [],
  },
];

import { defineConfig, type DefaultTheme } from "vitepress";

export const pt = defineConfig({
  lang: "pt-BR",

  themeConfig: {
    outline: {
      label: "Nesta página",
    },
    nav: nav(),
    sidebar: {
      "/docs/": {
        base: "/docs/",
        items: [
          {
            text: "Visão Geral",
            collapsed: false,

            items: [
              { text: "Jeito DB1", link: "data/db1-way" },
              {
                text: "Práticas Recomendadas",
                collapsed: true,
                items: [
                  {
                    text: "Governança e Qualidade",
                    link: "data/best-practices/1_governance-data-quality",
                  },
                  { 
                    text: "Processamento de Dados", 
                    link: "data/best-practices/2_engineer-processing" 
                  },
                  { 
                    text: "Modelagem e Arquitetura", 
                    link: "data/best-practices/3_data-modeling-architecture" 
                  },
                  { 
                    text: "Segurança e Compliance", 
                    link: "data/best-practices/4_security-and-compliance" 
                  },
                  { 
                    text: "Análise e Inteligência", 
                    link: "data/best-practices/5_analytics-and-intelligence" 
                  },
                ],
              },
              {
                text: "Carreira",
                collapsed: true,
                items: [
                  {
                    text: "Áreas de atuação",
                    link: "/data/career/activities",
                  },
                  {
                    text: "Avaliação de senioridades",
                    link: "/data/career/seniorities",
                  },
                  {
                    text: "Linguagens para Dados",
                    link: "/data/career/language",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    // {
    //   text: "Radar de tecnologia",
    //   link: "https://techradar.db1.com.br/",
    // },
  ];
}

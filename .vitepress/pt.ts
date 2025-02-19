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
                    text: "Documentação técnica",
                    link: "data/best-practices/technical-documentation",
                  },
                  { 
                    text: "CI/CD", 
                    link: "data/best-practices/ci-cd" 
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
    {
      text: "Radar de tecnologia",
      link: "https://techradar.db1.com.br/",
    },
  ];
}

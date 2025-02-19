import { defineConfig, type DefaultTheme } from "vitepress";

export const es = defineConfig({
  lang: "es-ES",

  themeConfig: {
    outline: {
      label: "En esta página",
    },
    nav: nav(),
    sidebar: {
      "/es/docs/": {
        base: "/es/docs/",
        items: [
          {
            text: "Descripción General",
            collapsed: false,

            items: [{ text: "DB1 Way", link: "/data/db1-way" },
            {
              text: "Mejores Prácticas",
              collapsed: true,
              items: [
                {
                  text: "Documentación técnica",
                  link: "/data/best-practices/technical-documentation",
                },
                { 
                  text: "CI/CD", 
                  link: "/data/best-practices/ci-cd" },
              ]
            },
            {
              text: "Carrera",
              collapsed: true,
              items: [
                {
                  text: "Evaluación de Seniorities",
                  link: "/data/career/seniorities",
                },
              ],
            }
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
      text: "Radar de Tecnología",
      link: "https://techradar.db1.com.br/",
    },
  ];
}

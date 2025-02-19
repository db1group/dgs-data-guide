import { defineConfig, type DefaultTheme } from "vitepress";

export const en = defineConfig({
  lang: "en-US",

  themeConfig: {
    outline: {
      label: "On this page",
    },
    nav: nav(),
    sidebar: {
      "/en/docs/": {
        base: "/en/docs/",
        items: [
          {
            text: "Overview",
            collapsed: false,

            items: [
              { text: "DB1 Way", link: "/data/db1-way" },
              {
                text: "Best Practices",
                collapsed: true,
                items: [
                  {
                    text: "Technical documentation",
                    link: "/data/best-practices/technical-documentation",
                  },
                  { 
                    text: "CI/CD", 
                    link: "/data/best-practices/ci-cd" 
                  },
                ],
              },
              {
                text: "Career",
                collapsed: true,
                items: [
                  {
                    text: "Seniority Assessment",
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
      text: "Technology Radar",
      link: "https://techradar.db1.com.br/",
    },
  ];
}

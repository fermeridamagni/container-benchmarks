import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import lucodeStarlight from "lucode-starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://fermeridamagni.github.io",
  base: "/container-benchmarks",
  integrations: [
    starlight({
      title: "Container Benchmarks",
      plugins: [
        lucodeStarlight({
          footerText: "Built open-source by fermeridamagni",
          docs: {
            includeAiUtilities: true,
          },
          navLinks: [
            {
              label: "Blog Article",
              link: "https://magni.dev/blog/articles/apple-container-vs-orbstack-docker",
            },
          ],
        }),
      ],
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      lastUpdated: true,
      credits: false,
      favicon: "https://assets.magni.dev/icons/favicon.ico",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/fermeridamagni/container-benchmarks",
        },
      ],
      sidebar: [
        {
          label: "Benchmarks",
          items: [
            { label: "Performance", link: "/benchmarks/performance/" },
            { label: "Image Size", link: "/benchmarks/image-size/" },
          ],
        },
      ],
    }),
    react(),
  ],
  image: {
    domains: ["assets.magni.dev"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

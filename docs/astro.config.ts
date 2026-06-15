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
      plugins: [lucodeStarlight()],
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
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
  vite: {
    plugins: [tailwindcss()],
  },
});

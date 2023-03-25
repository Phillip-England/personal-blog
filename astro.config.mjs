import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://phillip-england.github.io",
  base: "/personal-blog",
  integrations: [tailwind()],
})

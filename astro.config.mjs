import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

import netlify from "@astrojs/netlify/functions"

// https://astro.build/config
export default defineConfig({
  site: "https://phillip-england.github.io",
  base: "/personal-blog",
  integrations: [tailwind()],
  output: "server",
  adapter: netlify(),
})

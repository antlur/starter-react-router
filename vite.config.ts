import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyPlugin from "@netlify/vite-plugin-react-router";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ isSsrBuild }) => ({
  server: {
    port: 3000,
  },
  ssr: {
    noExternal: ["@antlur/backstage"],
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), netlifyPlugin(), svgr()],
}));

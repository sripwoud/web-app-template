import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const plugins = [tanstackRouter(), react(), tailwindcss(), tsconfigPaths()];

export default defineConfig(({ mode }) => {
  return {
    base: process.env.CI ? "/web-app-template/" : "/",
    plugins,
    server: { open: mode === "development" },
  };
});

import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const plugins = [tsconfigPaths(), TanStackRouterVite(), react()]

export default defineConfig(({ mode }) => {
  return {
    // https://vite.dev/guide/static-deploy#github-pages
    base: '/web-app-template/',
    plugins,
    server: { open: mode === 'development' },
  }
})

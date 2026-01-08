import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Figma asset resolver plugin
const figmaAssetPlugin = {
  name: 'figma-asset-resolver',
  resolveId(id) {
    if (id.startsWith('figma:asset/')) {
      const filename = id.replace('figma:asset/', '')
      return path.resolve(__dirname, './src/assets', filename)
    }
  },
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    figmaAssetPlugin,
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
  },
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})

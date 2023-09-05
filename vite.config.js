import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Specify the output directory for the production build
    minify: 'terser', // Minify the output using Terser
    sourcemap: false, // Disable source maps in production
  },
})

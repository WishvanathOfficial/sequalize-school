import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/sequalize-school/',
  server: {
    port: 3000,
    host: 'localhost',
    open: true,
  },  
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  // cors frontend never directly talks to port 3000 → it talks to Vite’s dev server (default 5173), and Vite proxies it.
  // it is best for development only not production
  server:{
    proxy:{
      "/api":"http://localhost:3000"
    },

  },
  plugins: [react()],
})

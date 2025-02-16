import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: process.env.PORT || 5173, // Use Render's provided port
  },
  plugins: [react()],
});

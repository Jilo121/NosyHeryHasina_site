import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify('service_2t5ukvm'),
    'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify('template_uk4wajl'),
    'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify('R3n5_pzjKPIPWL58p'),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
});
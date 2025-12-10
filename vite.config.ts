import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode`
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Set base path for GitHub Pages
    base: mode === 'production' ? `/${env.VITE_REPO_NAME || 'birmingham-soul'}/` : '/',
    build: {
      outDir: 'dist',
      sourcemap: false,
      emptyOutDir: true,
    },
    // Preview configuration
    preview: {
      port: 4173,
      host: true,
    }
  };
});

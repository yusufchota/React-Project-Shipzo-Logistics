import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [".", "./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist",
  },
  base: mode === "production" ? "/React-Project-Shipzo-Logistics/" : "/",
  plugins: mode === "development" ? [react(), expressPlugin()] : [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      server.middlewares.use(app);
    },
  };
}


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";

// export default defineConfig(({ mode }) => ({
//   base: mode === "production" ? "//" : "/",
  
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./client"),
//       "@shared": path.resolve(__dirname, "./shared"),
//     },
//   },

//   server: {
//     host: "0.0.0.0",
//     port: 8080,
//   },

//   build: {
//     outDir: "dist",
//   },

//   plugins: [react()],
// }));

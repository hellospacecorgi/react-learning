import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// https://getbootstrap.com/docs/5.3/getting-started/vite/#configure-vite
// export default {
//   root: path.resolve(__dirname, "src"),
//   build: {
//     outDir: "../dist",
//   },
//   server: {
//     port: 8080,
//   },
// };

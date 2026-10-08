import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This small file tells Vite to understand React (JSX) code.
export default defineConfig({
  plugins: [react()],
});

import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/embed.ts"),
      name: "DangerousHTML",
      fileName: "default/lib",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        "lit",
        "lit/decorators/custom-element.js",
        "lit/decorators/property.js",
      ],
    },
  },
});

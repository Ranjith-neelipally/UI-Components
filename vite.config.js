import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import dts from "vite-plugin-dts";

const isStorybook = process.env.npm_lifecycle_event && process.env.npm_lifecycle_event.includes("storybook");

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        !isStorybook && dts({ rollupTypes: true })
    ].filter(Boolean),
    build: {
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            name: "my-material-theme-ui-components",
            fileName: "my-material-theme-ui-components",
        },
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "react/jsxRuntime",
                    "styled-components": "styled",
                },
            },
        },
    },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export const libFileName = (format: string) => `index.${format}.js`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "tao-eidtor",
      fileName: libFileName,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        dir: resolve(__dirname, "lib"),
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: "React",
        },
      },
    },
  },
});

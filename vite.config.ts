import * as path from "path";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import banner from "vite-plugin-banner";
import styleInject from "./plugins/style-inject";
import packageJson from "./package.json";

const getPackageName = () => {
  // return packageJson.name;
  return "popover";
};

const getPackageNameCamelCase = () => {
  try {
    return getPackageName().replace(/-./g, (char) => char[1].toUpperCase());
  } catch (err) {
    throw new Error("Name property in package.json is missing.");
  }
};

const fileNames = {
  es: `${getPackageName()}.es.js`,
  umd: `${getPackageName()}.umd.js`,
  iife: `${getPackageName()}.iife.js`,
};

const pkgInfo = `/**
 * name: ${packageJson.name}
 * version: ${packageJson.version}
 * description: ${packageJson.description}
 * author: ${packageJson.author}
 * homepage: ${packageJson.homepage}
 * repository: ${packageJson.repository.url}
 */`;

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (mode === "lib") {
    return {
      base: "./",
      build: {
        lib: {
          entry: path.resolve(__dirname, "src/popover/index.tsx"),
          name: getPackageNameCamelCase(),
          formats: ["es", "iife", "umd"],
          fileName: (format) => fileNames[format],
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            assetFileNames: `${getPackageName()}.[ext]`,
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
            exports: "named",
          },
        },
        emptyOutDir: true,
        assetsDir: "assets",
      },
      plugins: [
        react({}),
        banner(pkgInfo),
        styleInject(),
        // dts({
        //   insertTypesEntry: true,
        // }),
      ],
      resolve: {
        alias: {
          "@/*": path.resolve(__dirname, "src"),
        },
      },
    };
  }

  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 3030,
      https: false,
      open: true,
    },
    resolve: {
      alias: {
        "@/*": resolve(__dirname, "src"),
      },
    },
  };
});

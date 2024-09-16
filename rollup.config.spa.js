import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import del from "rollup-plugin-delete";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-import-css";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "./src/spa-components/index.ts",
    plugins: [
      del({ hook: "buildStart", targets: "dist/spa-components" }),
      resolve({ browser: true, extensions: [".ts", ".tsx", ".js", ".jsx"] }),
      typescript({
        tsconfig: "tsconfig.build.json",
        baseUrl: "./dist",
      }),
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
        extensions: [".ts", ".tsx"],
        presets: [
          ["@babel/preset-react", { runtime: "automatic" }],
          "@babel/preset-typescript",
        ],
        plugins: ["@babel/plugin-transform-runtime"],
      }),
      commonjs(),
      terser(),
      css({
        output: "index.css",
      }),
    ],
    output: {
      file: "dist/spa-components/index.js",
      format: "es",
    },
  },
  {
    input: "./dist/spa-components/types/spa-components/index.d.ts",
    output: {
      file: "./dist/spa-components/index.d.ts",
      format: "es",
    },
    external: [/\.css$/],
    plugins: [
      dts(),
      del({ hook: "buildEnd", targets: "dist/spa-components/types" }),
    ],
  },
];

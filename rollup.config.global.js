import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import del from "rollup-plugin-delete";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace";
import dts from "rollup-plugin-dts";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "./src/global-components/index.ts",
    plugins: [
      del({ hook: "buildStart", targets: "dist/global-components" }),
      resolve({ browser: true, extensions: [".ts", ".tsx", ".js", ".jsx"] }),
      typescript({
        tsconfig: "tsconfig.build.json",
        baseUrl: "./dist",
      }),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        extensions: [".ts", ".tsx"],
        presets: ["@babel/preset-react", "@babel/preset-typescript"],
      }),
      commonjs(),
      terser(),
      replace({
        preventAssignment: true,
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
    ],
    output: {
      file: "dist/global-components/index.js",
      format: "umd",
      name: "MypComponents",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
    external: ["react", "react-dom"],
  },
  {
    input: "./dist/global-components/types/global-components/index.d.ts",
    output: {
      file: "./dist/global-components/index.d.ts",
      format: "umd",
    },
    plugins: [
      dts(),
      del({ hook: "buildEnd", targets: "dist/global-components/types" }),
    ],
  },
];

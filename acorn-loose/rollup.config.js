import buble from "rollup-plugin-buble"

export default {
  entry: "./acorn-loose/src/index.js",
  moduleName: "acorn.loose",
  plugins: [
    buble({transforms: {dangerousForOf: true}})
  ],
  sourceMap: true,
  targets: [
    {dest: "acorn-loose/dist/acorn-loose.js", format: "umd"},
    {dest: "acorn-loose/dist/acorn-loose.mjs", format: "es"}
  ],
  external: ["acorn"],
  globals: {acorn: "acorn"}
}

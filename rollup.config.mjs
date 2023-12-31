import typescript from "@rollup/plugin-typescript"

export default [
  {
    input: {
      "gasp": "./src/index.ts",
      // TODO: Find a way to generate multiple outputs and preserve indivitual
      // self containment. See https://github.com/rollup/rollup/issues/2756
      // "tests/services": "./src/services.test.ts"
    },
    output: {
      dir: "dist",
      format: "esm",
      name: "gasp",
    },
    treeshake: false,
    plugins: [
      typescript(),
    ]
  }
]

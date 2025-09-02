// eslint.config.js
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      prettier,
    },
    rules: {
      // Regras recomendadas do TS
      ...tsPlugin.configs.recommended.rules,

      // Regras customizadas TS
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-types": "off",

      // Prettier
      "prettier/prettier": "error",

      // 👇 Sempre exigir ponto e vírgula
      semi: ["error", "always"],
    },
  },

  // Ignorados
  {
    ignores: ["node_modules", "dist", "build", "/*.js"],
  },
];

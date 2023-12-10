module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 120,
  endOfLine: 'auto',
  arrowParens: 'always',
  bracketSpacing: true,
  tailwindConfig: './tailwind.config.js',
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

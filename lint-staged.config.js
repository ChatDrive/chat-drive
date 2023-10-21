module.exports = {
  "**/*": "prettier --write --ignore-unknown",
  "src/**/*.{vue,js,ts,jsx,tsx}": ["eslint --fix"],
};

module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["react", "@typescript-eslint", "eslint-plugin-import"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
	],
	rules: {
		quotes: [2, "double", { avoidEscape: true }],
		indent: 0,
		semi: ["error", "always"],
		"linebreak-style": ["error", "unix"],
		"no-unused-vars": [2, { vars: "all", args: "none" }],
		//"import/order": 2,
		"no-tabs": 0,
		//"no-useless-constructor": "error",
		"react/prop-types": 0,
		"react-hooks/exhaustive-deps": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
	},
};

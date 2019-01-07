module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: ['plugin:vue/recommended', 'prettier'],
	// required to lint *.vue files
	plugins: ['vue', 'prettier'],
	// add your custom rules here
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prettier/prettier': 'warn',
		'vue/max-attributes-per-line': 0,
		"vue/html-indent": [1, 'tab'],
		'vue/no-multi-spaces': 'warn',
		'vue/html-self-closing': 'warn',
		'vue/require-default-prop': 'off'
	}
}

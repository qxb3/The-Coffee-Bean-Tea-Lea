import { join } from 'path'

import { skeleton } from '@skeletonlabs/tw-plugin'
import { coffeeTheme } from './src/coffee.js'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
    container: {
      center: true
    },
		extend: {},
	},
	plugins: [
    require('@tailwindcss/forms'),
		skeleton({
			themes: {
				custom: [
					coffeeTheme,
				],
			},
		}),
	],
};

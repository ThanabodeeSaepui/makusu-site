/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": "#9dbf27",
				"secondary": "#22953f",
				"accent": "",
				"neutral": "",
				"base-100": "",
				"info": "#007cc6",
				"success": "#00bc5a",
				"warning": "#aa7900",
				"error": "#ff668c",
			}
		},
	},
	plugins: [daisyui],
}

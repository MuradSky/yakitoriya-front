import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '')
	const BASE = env.NODE_ENV === 'development' ? '/' : env.REACT_APP_URL

	return {
		base: BASE,
		plugins: [
			svgr(),
			react(),
			tsconfigPaths(),
		],
		server: {
			port: 3000
		}
	}
})

import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      host: true,
      port: 8021,
      proxy: {
        '/mock': {
          target: env.VITE_SERVER_MOCK,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/mock/, ''),
          secure: false
        },
      }
    }
  };
});

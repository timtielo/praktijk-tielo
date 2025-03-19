import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react({
        jsxRuntime: 'automatic',
        babel: {
          plugins: [
            ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
          ]
        }
      }),
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
      }),
      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
      }),
      mode === 'analyze' && visualizer({
        open: true,
        filename: 'dist/stats.html',
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
            'ui-vendor': ['@radix-ui/react-avatar', 'lucide-react', 'swiper'],
          },
        },
      },
      target: 'esnext',
      minify: 'terser',
      sourcemap: true,
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: true,
        },
      },
      assetsInlineLimit: 4096,
      chunkSizeWarningLimit: 1000,
    },
    server: {
      open: true,
      host: true,
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Embedder-Policy': 'require-corp',
        'Cross-Origin-Resource-Policy': 'cross-origin'
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'i18next', 'react-i18next'],
      exclude: ['data:'], // Prevent data URL imports
      force: true
    },
    esbuild: {
      jsx: 'automatic',
      jsxImportSource: 'react',
      supported: {
        'dynamic-import': true
      },
      legalComments: 'none'
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  };
});
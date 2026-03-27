import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

/**
 * Makes the bundle SSR-safe by guarding top-level browser API calls
 * (DOMParser, document) that dependencies introduce at module scope.
 */
function ssrSafeBrowserAPIs(): Plugin {
  return {
    name: 'ssr-safe-browser-apis',
    enforce: 'post',
    generateBundle(_, bundle) {
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (chunk.type !== 'chunk') continue
        let code = chunk.code

        // hast-util-from-html-isomorphic: `new DOMParser()`
        code = code.replace(
          /new DOMParser\(\)/g,
          '(typeof DOMParser !== "undefined" ? new DOMParser() : undefined)',
        )

        // parse-entities: `const D0 = document.createElement("i")`
        code = code.replace(
          /^(const|let|var)\s+(\w+)\s*=\s*document\.(createElement|createDocumentFragment)\(([^)]*)\);/gm,
          '$1 $2 = typeof document !== "undefined" ? document.$3($4) : undefined;',
        )

        chunk.code = code
      }
    },
  }
}

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'

  return {
    plugins: [
      tailwindcss(),
      react(),
      ...(isLib ? [dts({ include: ['src'] }), ssrSafeBrowserAPIs()] : []),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    build: isLib
      ? {
          outDir: 'dist',
          emptyOutDir: true,
          lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: 'index',
            cssFileName: 'styles',
          },
          rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
              },
            },
          },
        }
      : {
          outDir: 'dist-demo',
        },
  }
})

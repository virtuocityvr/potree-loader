import glsl from 'vite-plugin-glsl'
import dts from "vite-plugin-dts"
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    glsl({
      include: [                   // Glob pattern, or array of glob patterns to import
    '**/*.glsl', '**/*.wgsl',
    '**/*.vert', '**/*.frag',
    '**/*.vs', '**/*.fs'
  ],
    }),
    dts({
      insertTypesEntry: true,
      clearPureImport: false
      // staticImport: true
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'umd'],
      name: 'potree-loader',
      fileName: (format) => `potree-loader.${format}.js`,
    },
    
    sourcemap: true,
  },
  resolve: {
    alias: {
      'three': resolve('./node_modules/three')
    }
  }
})
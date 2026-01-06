import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
    host: true, // 默認是 localhost，設為 true 後會自動解析為你的局域網IP
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // rollupOptions: {
    //   treeshake: false, // 禁用摇树优化
    // },
    // minify: 'terser', // 确保使用 Terser 进行代码压缩
    // terserOptions: {
    //   keep_classnames: true, // 保留类名，防止类名被压缩
    //   keep_fnames: true, // 保留函数名，防止插件名被移除
    // },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       // api: 'modern-compiler', // or "modern", "legacy"
  //       // importers: [
  //       //   // ...
  //       // ],
  //       // additionalData: `@use "sass:math";`, // 确保正确引入你需要的 Sass 功能
  //       quietDeps: true, // 设置为 true 来隐藏 deprecation 警告
  //     },
  //   },
  // },
  base: '/',
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  logLevel: 'info',
  assetsInclude: ['**/*.otf', '**/*.woff', '**/*.woff2'],
  optimizeDeps: {
    // include: ['gsap'], // 明确包含 gsap 依赖
    disabled: 'build',
  },
}))

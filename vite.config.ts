import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000 // Cấu hình cho máy chủ phát triển Vite, đặt cổng là 3000.
  },
  css: {
    devSourcemap: true //Cấu hình cho CSS, bật chế độ devSourcemap để tạo ra bản đồ nguồn cho CSS trong quá trình phát triển
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
})
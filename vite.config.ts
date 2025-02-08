import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // อนุญาตให้เชื่อมต่อจากภายนอก
    port: 5173, // เปลี่ยนเป็นพอร์ตของคุณ (เช่น 5000 ถ้าใช้ ngrok)
    strictPort: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'nice-becoming-drake.ngrok-free.app' // ✅ เพิ่ม ngrok domain
    ],
    cors: true
  }
});

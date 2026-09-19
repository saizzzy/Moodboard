import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ====== Конфиг сборки Vite для VK Mini App ======
export default defineConfig({
  plugins: [react()],
  base: './', // относительные пути — корректно работают внутри VK клиента
});
// ====== Конец конфига ======

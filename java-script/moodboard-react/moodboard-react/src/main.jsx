import React from 'react';
import ReactDOM from 'react-dom/client';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import './design.css';

import { ThemeProvider } from './context/ThemeContext';
import { App } from './App';

// ===== БЛОК: инициализация VK Bridge =====
// Отправляем событие готовности приложения, чтобы VK корректно отрисовал его.
bridge.send('VKWebAppInit');
// ===== КОНЕЦ БЛОК: инициализация VK Bridge =====

// ===== БЛОК: монтирование приложения =====
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </React.StrictMode>
);
// ===== КОНЕЦ БЛОК: монтирование приложения =====

export default App;

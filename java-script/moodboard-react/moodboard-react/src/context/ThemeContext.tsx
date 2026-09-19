import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { Appearance } from '@vkontakte/vkui';

// ===== БЛОК: типы контекста темы =====
// appearance — текущее значение темы VK UI ('light' | 'dark').
// toggleTheme — переключает светлую/тёмную тему.
type ThemeCtx = {
  appearance: Appearance;
  toggleTheme: () => void;
};
const Ctx = createContext<ThemeCtx | null>(null);
// ===== КОНЕЦ БЛОК: типы контекста темы =====

// ===== БЛОК: провайдер темы =====
// Единственное «глобальное» состояние приложения. Без Redux и т.п.
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [appearance, setAppearance] = useState<Appearance>('light');

  const toggleTheme = () =>
    setAppearance((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <Ctx.Provider value={{ appearance, toggleTheme }}>{children}</Ctx.Provider>
  );
};
// ===== КОНЕЦ БЛОК: провайдер темы =====

// ===== БЛОК: хук доступа к теме =====
// Бросаем ошибку, если хук вызван вне провайдера — проще отлаживать.
export const useTheme = (): ThemeCtx => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
// ===== КОНЕЦ БЛОК: хук доступа к теме =====

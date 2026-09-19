import { Tabbar, TabbarItem } from '@vkontakte/vkui';
import {
  Icon28CalendarOutline,
  Icon28StatisticsOutline,
  Icon28UserOutline,
} from '@vkontakte/icons';

// ===== БЛОК: конфиг табов (единый источник правды) =====
// Здесь описываем все вкладки нижней навигации.
export const TABS = [
  { id: 'schedule', label: 'Расписание', Icon: Icon28CalendarOutline },
  { id: 'grades', label: 'Оценки', Icon: Icon28StatisticsOutline },
  { id: 'profile', label: 'Профиль', Icon: Icon28UserOutline },
] as const;

export type TabId = (typeof TABS)[number]['id'];
// ===== КОНЕЦ БЛОК: конфиг табов =====

// ===== БЛОК: нижняя навигация =====
// active — id активной вкладки, onChange — колбэк переключения.
export const BottomTabBar = ({
  active,
  onChange,
}: {
  active: TabId;
  onChange: (id: TabId) => void;
}) => (
  // ----- БЛОК: фиксированный контейнер таб-бара -----
  // Учитываем safe-area (жестовая полоса/вырез на мобильных VK).
  <div
    style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      paddingBottom: 'env(safe-area-inset-bottom)',
      background: 'var(--vkui--color_background_content)',
    }}
  >
    <Tabbar>
      {TABS.map(({ id, label, Icon }) => (
        <TabbarItem
          key={id}
          selected={active === id}
          onClick={() => onChange(id)}
          text={label}
        >
          <Icon />
        </TabbarItem>
      ))}
    </Tabbar>
  </div>
  // ----- КОНЕЦ БЛОК: фиксированный контейнер таб-бара -----
);
// ===== КОНЕЦ БЛОК: нижняя навигация =====

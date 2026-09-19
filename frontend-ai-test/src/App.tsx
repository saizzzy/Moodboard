// ====== БЛОК 1: импорты ======
import { useState } from 'react';
import { ConfigProvider, AppRoot, Panel } from '@vkontakte/vkui';
import type { Appearance, TabId } from './types';
import { AppHeader } from './components/AppHeader';
import { Tabbar } from './components/Tabbar';
import { SettingsModal } from './components/SettingsModal';
import { ScheduleScreen } from './screens/ScheduleScreen';
import { GradesScreen } from './screens/GradesScreen';
import { ProfileScreen } from './screens/ProfileScreen';
// ====== КОНЕЦ БЛОКА 1 ======

export default function App() {
  // ====== БЛОК 2: состояние приложения (тема + активный таб + модалка) ======
  const [theme, setTheme] = useState<Appearance>('light');
  const [activeTab, setActiveTab] = useState<TabId>('schedule');
  const [settingsOpen, setSettingsOpen] = useState(false);
  // ====== КОНЕЦ БЛОКА 2 ======

  // ====== БЛОК 3: рендер текущего экрана по activeTab ======
  const renderScreen = () => {
    switch (activeTab) {
      case 'schedule':
        return <ScheduleScreen />;
      case 'grades':
        return <GradesScreen />;
      case 'profile':
        return <ProfileScreen />;
    }
  };
  // ====== КОНЕЦ БЛОКА 3 ======

  // ====== БЛОК 4: сборка layout (шапка + экран + таббар + модалка) ======
  return (
    <ConfigProvider colorScheme={theme}>
      <AppRoot>
        <AppHeader onOpenSettings={() => setSettingsOpen(true)} />
        <Panel>{renderScreen()}</Panel>
        <Tabbar activeTab={activeTab} onChange={setActiveTab} />
        <SettingsModal
          open={settingsOpen}
          theme={theme}
          onClose={() => setSettingsOpen(false)}
          onThemeChange={setTheme}
        />
      </AppRoot>
    </ConfigProvider>
  );
  // ====== КОНЕЦ БЛОКА 4 ======
}

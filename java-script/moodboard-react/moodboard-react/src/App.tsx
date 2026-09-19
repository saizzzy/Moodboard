import { useState } from 'react';
import {
  AppRoot,
  ConfigProvider,
  AppearanceProvider,
  AdaptivityProvider,
  SplitLayout,
  SplitCol,
  View,
  Panel,
} from '@vkontakte/vkui';
import { useTheme } from './context/ThemeContext';
import { AppHeader } from './components/layout/AppHeader';
import { BottomTabBar } from './components/layout/BottomTabBar';
import type { TabId } from './components/layout/BottomTabBar';
import { SchedulePanel } from './components/schedule/SchedulePanel';
import { GradesPanel } from './components/grades/GradesPanel';
import { ProfilePanel } from './components/profile/ProfilePanel';

// ===== БЛОК: корневой компонент приложения =====
export const App = () => {
  const { appearance } = useTheme();              // 'light' | 'dark' из контекста
  const [activeTab, setActiveTab] = useState<TabId>('schedule');

  return (
    // ----- БЛОК: провайдеры темы, платформы и адаптивности -----
    <AppRoot>
      <AppearanceProvider appearance={appearance}>
        <ConfigProvider platform="vkcom">
          <AdaptivityProvider>
            {/* ----- БЛОК: каркас layout ----- */}
            <SplitLayout header={<AppHeader />}>
              <SplitCol autoSpaced>
                {/* View переключает панели по activePanel — простой роутинг */}
                <View activePanel={activeTab}>
                  <Panel id="schedule">
                    <SchedulePanel />
                  </Panel>
                  <Panel id="grades">
                    <GradesPanel />
                  </Panel>
                  <Panel id="profile">
                    <ProfilePanel />
                  </Panel>
                </View>
              </SplitCol>
              {/* Фиксированный таб-бар поверх контента */}
              <BottomTabBar active={activeTab} onChange={setActiveTab} />
            </SplitLayout>
            {/* ----- КОНЕЦ БЛОК: каркас layout ----- */}
          </AdaptivityProvider>
        </ConfigProvider>
      </AppearanceProvider>
    </AppRoot>
    // ----- КОНЕЦ БЛОК: провайдеры -----
  );
};
// ===== КОНЕЦ БЛОК: корневой компонент приложения =====

// ====== БЛОК 1: импорты ======
import { Tabbar as VKTabbar, TabbarItem } from '@vkontakte/vkui';
import {
  Icon28CalendarOutline,
  Icon28StatisticsOutline,
  Icon28UserOutline,
} from '@vkontakte/icons';
import type { TabId } from '../types';
// ====== КОНЕЦ БЛОКА 1 ======

// ====== БЛОК 2: нижняя фиксированная навигация из трёх вкладок ======
interface Props {
  activeTab: TabId;
  onChange: (tab: TabId) => void;
}

export function Tabbar({ activeTab, onChange }: Props) {
  return (
    <VKTabbar>
      <TabbarItem selected={activeTab === 'schedule'} onClick={() => onChange('schedule')}>
        <Icon28CalendarOutline />
        Расписание
      </TabbarItem>
      <TabbarItem selected={activeTab === 'grades'} onClick={() => onChange('grades')}>
        <Icon28StatisticsOutline />
        Оценки
      </TabbarItem>
      <TabbarItem selected={activeTab === 'profile'} onClick={() => onChange('profile')}>
        <Icon28UserOutline />
        Профиль
      </TabbarItem>
    </VKTabbar>
  );
}
// ====== КОНЕЦ БЛОКА 2 ======

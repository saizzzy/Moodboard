// ====== БЛОК 1: импорты ======
import { PanelHeader, PanelHeaderButton, Text } from '@vkontakte/vkui';
import { Icon24Settings } from '@vkontakte/icons';
// ====== КОНЕЦ БЛОКА 1 ======

// ====== БЛОК 2: шапка приложения: название слева, шестерёнка справа ======
export function AppHeader({ onOpenSettings }: { onOpenSettings: () => void }) {
  return (
    <PanelHeader
      before={<Text weight="1">Учебный помощник</Text>}
      after={
        <PanelHeaderButton aria-label="Настройки" onClick={onOpenSettings}>
          <Icon24Settings />
        </PanelHeaderButton>
      }
    />
  );
}
// ====== КОНЕЦ БЛОКА 2 ======

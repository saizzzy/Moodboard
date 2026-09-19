import { useState } from 'react';
import { PanelHeader, IconButton, Title } from '@vkontakte/vkui';
import { Icon24Settings } from '@vkontakte/icons';
import { SettingsModal } from '../settings/SettingsModal';

// ===== БЛОК: шапка приложения =====
// Название приложения слева, кнопка настроек (шестерёнка) справа.
export const AppHeader = () => {
  // Локальное состояние: открыта ли модалка настроек.
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ----- БЛОК: панель шапки ----- */}
      <PanelHeader
        // before = левая часть шапки (название приложения)
        before={
          <Title level="2" weight="2">
            Дневник
          </Title>
        }
        // after = правая часть шапки (кнопка настроек)
        after={
          <IconButton
            label="Настройки"
            onClick={() => setModalOpen(true)}
          >
            <Icon24Settings />
          </IconButton>
        }
      >
        {null /* центральный заголовок не нужен — название уже слева */}
      </PanelHeader>
      {/* ----- КОНЕЦ БЛОК: панель шапки ----- */}

      {/* ----- БЛОК: модальное окно настроек ----- */}
      <SettingsModal open={modalOpen} onClose={() => setModalOpen(false)} />
      {/* ----- КОНЕЦ БЛОК: модальное окно настроек ----- */}
    </>
  );
};
// ===== КОНЕЦ БЛОК: шапка приложения =====

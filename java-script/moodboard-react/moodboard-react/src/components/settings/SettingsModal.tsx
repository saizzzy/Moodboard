import {
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  PanelHeaderClose,
  ModalCard,
  SimpleCell,
  Switch,
  FormItem,
} from '@vkontakte/vkui';
import { useTheme } from '../../context/ThemeContext';

// ===== БЛОК: модальное окно настроек =====
// Открывается по шестерёнке в шапке. Сейчас содержит переключатель темы.
export const SettingsModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { appearance, toggleTheme } = useTheme();

  // ----- БЛОК: описание модального роута «settings» -----
  const settingsModal = (
    <ModalPage
      id="settings"
      onClose={onClose}
      header={
        <ModalPageHeader left={<PanelHeaderClose onClick={onClose} />}>
          Настройки
        </ModalPageHeader>
      }
    >
      <ModalCard>
        {/* ----- БЛОК: переключатель тёмной темы ----- */}
        <FormItem>
          <SimpleCell
            after={
              <Switch
                checked={appearance === 'dark'}
                onChange={toggleTheme}
              />
            }
          >
            Тёмная тема
          </SimpleCell>
        </FormItem>
        {/* ----- КОНЕЦ БЛОК: переключатель тёмной темы ----- */}
      </ModalCard>
    </ModalPage>
  );
  // ----- КОНЕЦ БЛОК: описание модального роута -----

  // activeModal = null закрывает модалку.
  return (
    <ModalRoot activeModal={open ? 'settings' : null}>
      {settingsModal}
    </ModalRoot>
  );
};
// ===== КОНЕЦ БЛОК: модальное окно настроек =====

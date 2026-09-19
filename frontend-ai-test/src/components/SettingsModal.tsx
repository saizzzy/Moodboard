// ====== БЛОК 1: импорты ======
import { ModalRoot, ModalCard, Switch, FormItem } from '@vkontakte/vkui';
import type { Appearance } from '../types';
// ====== КОНЕЦ БЛОКА 1 ======

// ====== БЛОК 2: модальное окно настроек с переключателем темы ======
interface Props {
  open: boolean;
  theme: Appearance;
  onClose: () => void;
  onThemeChange: (theme: Appearance) => void;
}

export function SettingsModal({ open, theme, onClose, onThemeChange }: Props) {
  return (
    <ModalRoot activeModal={open ? 'settings' : null} onClose={onClose}>
      <ModalCard id="settings" onClose={onClose} title="Настройки">
        {/* переключатель тёмной/светлой темы */}
        <FormItem>
          <Switch
            checked={theme === 'dark'}
            onChange={(e) => onThemeChange(e.target.checked ? 'dark' : 'light')}
          >
            Тёмная тема
          </Switch>
        </FormItem>
      </ModalCard>
    </ModalRoot>
  );
}
// ====== КОНЕЦ БЛОКА 2 ======

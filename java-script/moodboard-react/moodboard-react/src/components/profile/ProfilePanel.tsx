import { PanelHeader, Group, Placeholder } from '@vkontakte/vkui';
import { Icon28UserCircleOutline } from '@vkontakte/icons';

// ===== БЛОК: экран «Профиль» (заглушка) =====
// Третий таб навигации. Реализован минимально — как заготовка под будущее.
export const ProfilePanel = () => (
  <>
    <PanelHeader>Профиль</PanelHeader>
    <Group>
      <Placeholder icon={<Icon28UserCircleOutline width={56} height={56} />}>
        Раздел «Профиль» в разработке
      </Placeholder>
    </Group>
  </>
);
// ===== КОНЕЦ БЛОК: экран «Профиль» =====

// ====== БЛОК 1: импорты ======
import { Group, Header, SimpleCell, Avatar, Div, Text } from '@vkontakte/vkui';
// ====== КОНЕЦ БЛОКА 1 ======

// ====== БЛОК 2: экран «Профиль» (заглушка, только UI) ======
export function ProfileScreen() {
  return (
    <Group header={<Header>Профиль</Header>}>
      <SimpleCell before={<Avatar size={48} />} subtitle="Ученик 11 класса">
        Иван Иванов
      </SimpleCell>
      <Div>
        <Text>Здесь будет информация об ученике и его достижениях.</Text>
      </Div>
    </Group>
  );
}
// ====== КОНЕЦ БЛОКА 2 ======

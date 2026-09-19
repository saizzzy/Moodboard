// ====== БЛОК 1: импорты ======
import { Group, Header, CardGrid, Card, Div, Title, Text, Spacing } from '@vkontakte/vkui';
import { GRADES, type Grade } from '../data/grades';
// ====== КОНЕЦ БЛОКА 1 ======

// ====== БЛОК 2: карточка одной оценки (значение + предмет + дата) ======
function GradeCard({ grade }: { grade: Grade }) {
  return (
    <Card mode="shadow">
      <Div>
        <Title level="1">{grade.value}</Title>
        <Text weight="2">{grade.subject}</Text>
        <Spacing size={4} />
        <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>{grade.date}</Text>
      </Div>
    </Card>
  );
}
// ====== КОНЕЦ БЛОКА 2 ======

// ====== БЛОК 3: экран «Оценки» ======
export function GradesScreen() {
  // ====== БЛОК 3.1: расчёт среднего балла ======
  const average = (GRADES.reduce((sum, g) => sum + g.value, 0) / GRADES.length).toFixed(2);
  // ====== КОНЕЦ БЛОКА 3.1 ======

  return (
    <>
      {/* ====== БЛОК 3.2: средний балл ====== */}
      <Group header={<Header>Средний балл</Header>}>
        <Div>
          <Title level="1">{average}</Title>
        </Div>
      </Group>
      {/* ====== КОНЕЦ БЛОКА 3.2 ====== */}

      {/* ====== БЛОК 3.3: адаптивная сетка карточек оценок ====== */}
      <Group header={<Header>Оценки</Header>}>
        <CardGrid size="s">
          {GRADES.map((g) => (
            <GradeCard key={g.id} grade={g} />
          ))}
        </CardGrid>
      </Group>
      {/* ====== КОНЕЦ БЛОКА 3.3 ====== */}

      {/* ====== БЛОК 3.4: текстовый блок аналитики динамики ====== */}
      <Group header={<Header>Аналитика</Header>}>
        <Div>
          <Text>Средний балл растёт: +0.3 за последнюю неделю.</Text>
        </Div>
      </Group>
      {/* ====== КОНЕЦ БЛОКА 3.4 ====== */}
    </>
  );
}
// ====== КОНЕЦ БЛОКА 3 ======

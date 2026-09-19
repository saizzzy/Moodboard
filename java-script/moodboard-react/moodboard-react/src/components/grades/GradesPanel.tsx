import { PanelHeader, Group, CardGrid, Header } from '@vkontakte/vkui';
import { GradeCard } from './GradeCard';
import { AverageScore } from './AverageScore';
import { GradesAnalytics } from './GradesAnalytics';
import { mockGrades } from '../../mock/grades';

// ===== БЛОК: экран «Оценки» =====
export const GradesPanel = () => {
  // ----- БЛОК: расчёт среднего балла -----
  // Чистая функция от мок-данных, никаких запросов к серверу.
  const average =
    mockGrades.reduce((sum, grade) => sum + grade.value, 0) /
    mockGrades.length;
  // ----- КОНЕЦ БЛОК: расчёт среднего балла -----

  return (
    <>
      <PanelHeader>Оценки</PanelHeader>

      {/* ----- БЛОК: сводка — средний балл ----- */}
      <Group>
        <AverageScore value={Number(average.toFixed(2))} />
      </Group>
      {/* ----- КОНЕЦ БЛОК: сводка ----- */}

      {/* ----- БЛОК: сетка компактных карточек оценок -----
           size="s" — 2–3 карточки в ряд в зависимости от ширины экрана. */}
      <Group header={<Header>Последние оценки</Header>}>
        <CardGrid size="s">
          {mockGrades.map((grade) => (
            <GradeCard key={grade.id} grade={grade} />
          ))}
        </CardGrid>
      </Group>
      {/* ----- КОНЕЦ БЛОК: сетка карточек ----- */}

      {/* ----- БЛОК: текстовая аналитика динамики ----- */}
      <Group>
        <GradesAnalytics grades={mockGrades} />
      </Group>
      {/* ----- КОНЕЦ БЛОК: текстовая аналитика ----- */}
    </>
  );
};
// ===== КОНЕЦ БЛОК: экран «Оценки» =====

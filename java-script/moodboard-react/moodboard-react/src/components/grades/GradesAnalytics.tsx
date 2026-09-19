import { Div, Text } from '@vkontakte/vkui';
import type { Grade } from '../../mock/grades';

// ===== БЛОК: текстовый блок аналитики динамики оценок =====
export const GradesAnalytics = ({ grades }: { grades: Grade[] }) => {
  // ----- БЛОК: простая эвристика динамики -----
  // Сравниваем первую и последнюю оценку — этого достаточно для демо.
  const first = grades[0]?.value ?? 0;
  const last = grades[grades.length - 1]?.value ?? 0;
  const trend = last > first ? 'растёт' : last < first ? 'снижается' : 'стабильна';
  // ----- КОНЕЦ БЛОК: простая эвристика динамики -----

  return (
    <Div>
      <Text>
        Динамика оценок <b>{trend}</b>. Первая оценка — {first}, последняя —{' '}
        {last}. Рекомендуем обратить внимание на предметы с оценкой ниже
        средней.
      </Text>
    </Div>
  );
};
// ===== КОНЕЦ БЛОК: текстовый блок аналитики =====

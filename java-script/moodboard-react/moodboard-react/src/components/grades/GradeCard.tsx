import { Card, Div, Title, Text } from '@vkontakte/vkui';
import type { Grade } from '../../mock/grades';

// ===== БЛОК: компактная карточка оценки =====
// Содержит: оценку, предмет и дату.
export const GradeCard = ({ grade }: { grade: Grade }) => {
  // Цвет числа: зелёный для хороших оценок, красный для низких.
  const valueColor =
    grade.value >= 4
      ? 'var(--vkui--color_text_positive)'
      : 'var(--vkui--color_text_negative)';

  return (
    <Card mode="shadow">
      <Div>
        {/* ----- БЛОК: оценка ----- */}
        <Title level="2" weight="1" style={{ color: valueColor }}>
          {grade.value}
        </Title>
        {/* ----- КОНЕЦ БЛОК: оценка ----- */}

        {/* ----- БЛОК: предмет и дата ----- */}
        <Text weight="2">{grade.subject}</Text>
        <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>
          {grade.date}
        </Text>
        {/* ----- КОНЕЦ БЛОК: предмет и дата ----- */}
      </Div>
    </Card>
  );
};
// ===== КОНЕЦ БЛОК: компактная карточка оценки =====

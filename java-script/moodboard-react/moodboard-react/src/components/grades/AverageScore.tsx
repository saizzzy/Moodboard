import { Card, Div, Title, Text } from '@vkontakte/vkui';

// ===== БЛОК: блок общего среднего балла =====
export const AverageScore = ({ value }: { value: number }) => (
  <Card mode="shadow">
    <Div style={{ textAlign: 'center' }}>
      <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>
        Средний балл
      </Text>
      <Title level="1" weight="1">
        {value}
      </Title>
    </Div>
  </Card>
);
// ===== КОНЕЦ БЛОК: блок общего среднего балла =====

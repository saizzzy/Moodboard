import { Card, Div, Title, Text, Button } from '@vkontakte/vkui';
import { Icon24Search } from '@vkontakte/icons';
import { MaterialFinder } from './MaterialFinder';
import type { Lesson } from '../../mock/schedule';

// ===== БЛОК: карточка урока =====
// expanded — раскрыт ли блок материалов; onToggle — переключение.
export const LessonCard = ({
  lesson,
  expanded,
  onToggle,
}: {
  lesson: Lesson;
  expanded: boolean;
  onToggle: () => void;
}) => (
  <Card mode="shadow">
    <Div>
      {/* ----- БЛОК: время и предмет ----- */}
      <Text weight="2" style={{ color: 'var(--vkui--color_text_secondary)' }}>
        {lesson.time}
      </Text>
      <Title level="3">{lesson.subject}</Title>
      {/* ----- КОНЕЦ БЛОК: время и предмет ----- */}

      {/* ----- БЛОК: кнопка поиска материалов -----
           Находится ВНЕ анимируемого контейнера, поэтому всегда видима. */}
      <Button
        mode="secondary"
        size="m"
        before={<Icon24Search />}
        onClick={onToggle}
        aria-expanded={expanded}
        style={{ marginTop: 12 }}
      >
        {expanded ? 'Скрыть материалы' : 'Найти материалы'}
      </Button>
      {/* ----- КОНЕЦ БЛОК: кнопка поиска материалов ----- */}

      {/* ----- БЛОК: раскрывающийся блок материалов ----- */}
      <MaterialFinder topic={lesson.subject} open={expanded} />
      {/* ----- КОНЕЦ БЛОК: раскрывающийся блок материалов ----- */}
    </Div>
  </Card>
);
// ===== КОНЕЦ БЛОК: карточка урока =====

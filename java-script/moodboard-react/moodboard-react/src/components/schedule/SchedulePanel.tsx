import { useState } from 'react';
import { PanelHeader, Group, CardGrid, Header } from '@vkontakte/vkui';
import { LessonCard } from './LessonCard';
import { mockSchedule } from '../../mock/schedule';

// ===== БЛОК: экран «Расписание» =====
export const SchedulePanel = () => {
  // ----- БЛОК: состояние раскрытой карточки -----
  // null — все свёрнуты; id — раскрыт только один урок одновременно.
  const [expandedId, setExpandedId] = useState<string | null>(null);
  // ----- КОНЕЦ БЛОК: состояние раскрытой карточки -----

  return (
    <>
      <PanelHeader>Расписание</PanelHeader>
      <Group header={<Header>Сегодня</Header>}>
        {/* ----- БЛОК: список уроков -----
             CardGrid size="l" — одна колонка на телефоне, авто-расширение на десктопе. */}
        <CardGrid size="l">
          {mockSchedule.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              expanded={expandedId === lesson.id}
              onToggle={() =>
                setExpandedId((prev) => (prev === lesson.id ? null : lesson.id))
              }
            />
          ))}
        </CardGrid>
        {/* ----- КОНЕЦ БЛОК: список уроков ----- */}
      </Group>
    </>
  );
};
// ===== КОНЕЦ БЛОК: экран «Расписание» =====

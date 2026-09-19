// ====== БЛОК 1: импорты ======
import { useState } from 'react';
import { Group, Header, List, SimpleCell, IconButton, Div, Placeholder } from '@vkontakte/vkui';
import { Icon24Search, Icon24ChevronDown } from '@vkontakte/icons';
import { LESSONS, type Lesson } from '../data/lessons';
// ====== КОНЕЦ БЛОКА 1 ======

// ====== БЛОК 2: обёртка плавного раскрытия (не ломает сетку, без сдвига ширины) ======
function Collapsible({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: open ? '1fr' : '0fr',
        transition: 'grid-template-rows 300ms ease, opacity 300ms ease',
        opacity: open ? 1 : 0,
      }}
    >
      <div style={{ overflow: 'hidden' }}>{children}</div>
    </div>
  );
}
// ====== КОНЕЦ БЛОКА 2 ======

// ====== БЛОК 3: один урок со сворачиваемым блоком материалов ======
function LessonItem({ lesson }: { lesson: Lesson }) {
  // локальное состояние «материалы показаны»
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* строка урока: предмет + кнопка поиска материалов */}
      <SimpleCell
        before={<Icon24Search />}
        subtitle={lesson.time}
        after={
          <IconButton aria-label="Материалы" onClick={() => setOpen((v) => !v)}>
            <Icon24ChevronDown
              style={{
                transform: open ? 'rotate(180deg)' : 'none',
                transition: 'transform 300ms ease',
              }}
            />
          </IconButton>
        }
      >
        {lesson.subject}
      </SimpleCell>

      {/* плавно раскрывающийся блок материалов по теме */}
      <Collapsible open={open}>
        <Div>
          <Placeholder>Материалы по теме: {lesson.topic}</Placeholder>
        </Div>
      </Collapsible>
    </div>
  );
}
// ====== КОНЕЦ БЛОКА 3 ======

// ====== БЛОК 4: экран «Расписание» ======
export function ScheduleScreen() {
  return (
    <Group header={<Header>Расписание</Header>}>
      <List>
        {LESSONS.map((lesson) => (
          <LessonItem key={lesson.id} lesson={lesson} />
        ))}
      </List>
    </Group>
  );
}
// ====== КОНЕЦ БЛОКА 4 ======

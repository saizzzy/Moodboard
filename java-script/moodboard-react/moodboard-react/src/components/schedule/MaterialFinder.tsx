import { useEffect, useState } from 'react';
import { Spinner, SimpleCell, List, Text } from '@vkontakte/vkui';
import '../../styles/animations.css';

// ===== БЛОК: раскрывающийся список учебных материалов =====
// topic — тема урока; open — открыт ли блок (управляет анимацией).
export const MaterialFinder = ({
  topic,
  open,
}: {
  topic: string;
  open: boolean;
}) => {
  const [loading, setLoading] = useState(false);
  const [materials, setMaterials] = useState<string[]>([]);

  // ----- БЛОК: имитация поиска материалов при раскрытии -----
  // Реального API нет, поэтому показываем мок-список после задержки.
  useEffect(() => {
    if (!open) return;
    setLoading(true);
    const timer = setTimeout(() => {
      setMaterials([
        `Конспект по теме «${topic}»`,
        `Видеоразбор: ${topic}`,
        `Тест для самопроверки`,
      ]);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [open, topic]);
  // ----- КОНЕЦ БЛОК: имитация поиска материалов -----

  return (
    // ----- БЛОК: анимируемый контейнер (grid 0fr -> 1fr) -----
    // Классы .reveal / .reveal--open описаны в styles/animations.css.
    <div
      className={`reveal ${open ? 'reveal--open' : ''}`}
      aria-hidden={!open}
    >
      <div className="reveal__inner">
        {loading ? (
          <Spinner size="m" />
        ) : (
          <List>
            {materials.map((material) => (
              <ListItem key={material}>
                <Text>{material}</Text>
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </div>
    // ----- КОНЕЦ БЛОК: анимируемый контейнер -----
  );
};
// ===== КОНЕЦ БЛОК: раскрывающийся список учебных материалов =====


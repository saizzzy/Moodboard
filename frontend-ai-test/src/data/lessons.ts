// ====== Мок-данные расписания (только фронтенд, без бэкенда) ======
export interface Lesson {
  id: number;
  subject: string;
  time: string;
  topic: string;
}

export const LESSONS: Lesson[] = [
  { id: 1, subject: 'Математика', time: '09:00', topic: 'Квадратные уравнения' },
  { id: 2, subject: 'Физика', time: '10:00', topic: 'Законы Ньютона' },
  { id: 3, subject: 'Русский язык', time: '11:00', topic: 'Сложноподчинённые предложения' },
  { id: 4, subject: 'История', time: '12:00', topic: 'Реформы Петра I' },
  { id: 5, subject: 'Биология', time: '13:00', topic: 'Клеточное строение' },
];
// ====== Конец мок-данных расписания ======

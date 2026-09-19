// ====== Мок-данные оценок (только фронтенд, без бэкенда) ======
export interface Grade {
  id: number;
  value: number;
  date: string;
  subject: string;
}

export const GRADES: Grade[] = [
  { id: 1, value: 5, date: '12.03', subject: 'Математика' },
  { id: 2, value: 4, date: '13.03', subject: 'Физика' },
  { id: 3, value: 5, date: '14.03', subject: 'Русский язык' },
  { id: 4, value: 3, date: '15.03', subject: 'История' },
  { id: 5, value: 5, date: '16.03', subject: 'Биология' },
  { id: 6, value: 4, date: '17.03', subject: 'Математика' },
  { id: 7, value: 5, date: '18.03', subject: 'Физика' },
  { id: 8, value: 4, date: '19.03', subject: 'История' },
];
// ====== Конец мок-данных оценок ======

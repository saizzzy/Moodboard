import React from 'react';
import ReactDOM from 'react-dom/client';
import './design.css';
function MyPage() {
    return (
        <div className="vk-phone-frame">
            {/* Шапка мини-приложения */}
            <header className="vk-header">
                <div className="vk-header-left">
                    <span className="vk-close-icon">✕</span>
                    <span className="vk-app-title">Школьный Дневник</span>
                </div>
                <span className="vk-dots-icon">•••</span>
            </header>

            {/* Контентная часть */}
            <div className="vk-app-content">

                {/* Краткая статистика вверху */}
                <div className="diary-stats-card">
                    <div className="diary-stat-item">
                        <span className="diary-stat-num">4.62</span>
                        <span className="diary-stat-label">Средний балл</span>
                    </div>
                    <div className="diary-stat-item">
                        <span className="diary-stat-num">2</span>
                        <span className="diary-stat-label">Долгов по ДЗ</span>
                    </div>
                </div>

                {/* Заголовок текущего дня */}
                <div className="day-heading">
                    <h3>Понедельник, 14 сентября</h3>
                    <button className="add-task-btn">+ Добавить ДЗ</button>
                </div>

                {/* КАРТОЧКА УРОКА №1 (ДЗ от учителя) */}
                <div className="lesson-card">
                    <div className="lesson-header">
                        <span className="lesson-time">08:30 – 09:15</span>
                        <span className="lesson-badge math">Алгебра</span>
                    </div>
                    <h4 className="lesson-topic">Тема: Квадратные уравнения</h4>

                    <div className="homework-box">
                        <div className="homework-author">
                            <span className="author-badge teacher">🎓 От учителя</span>
                        </div>
                        <p className="homework-text">Решить в тетради №142, №145 (подпункты а, б).</p>
                    </div>

                    <button className="doc-request-btn">🔍 Найти материалы по теме</button>
                </div>

                {/* КАРТОЧКА УРОКА №2 (ДЗ добавлено учеником самостоятельно) */}
                <div className="lesson-card">
                    <div className="lesson-header">
                        <span className="lesson-time">09:25 – 10:10</span>
                        <span className="lesson-badge info">Информатика</span>
                    </div>
                    <h4 className="lesson-topic">Тема: Циклы в Python</h4>

                    <div className="homework-box">
                        <div className="homework-author">
                            <span className="author-badge student">👤 Моя заметка</span>
                        </div>
                        <p className="homework-text">Дописать функцию `while` из презентации.</p>
                    </div>

                    <button className="doc-request-btn">🔍 Найти материалы по теме</button>
                </div>

            </div>

            {/* Нижнее меню навигации (Таббар) */}
            <nav className="vk-tabbar">
                <div className="tabbar-item active">
                    <span className="tab-icon">📅</span>
                    <span className="tab-label">Расписание</span>
                </div>
                <div className="tabbar-item">
                    <span className="tab-icon">📊</span>
                    <span className="tab-label">Оценки</span>
                </div>
            </nav>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MyPage />
    </React.StrictMode>
);

export default MyPage;
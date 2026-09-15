import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './design.css';

function MyPage() {
    const [schedule, setSchedule] = useState([]);
    const [grades, setGrades] = useState([]);
    const [activeTab, setActiveTab] = useState('schedule');
    const [loading, setLoading] = useState(true);

    const [isAdding, setIsAdding] = useState(false);
    const [subject, setSubject] = useState('');
    const [topic, setTopic] = useState('');
    const [homeworkText, setHomeworkText] = useState('');

    useEffect(() => {
        Promise.all([
            fetch('http://localhost:8080/api/schedule').then(res => res.json()),
            fetch('http://localhost:8080/api/grades').then(res => res.json())
        ])
            .then(([scheduleData, gradesData]) => {
                setSchedule(scheduleData);
                setGrades(gradesData);
                setLoading(false);
            })
            .catch(err => {
                console.error('Ошибка загрузки данных:', err);
                setLoading(false);
            });
    }, []);

    const submitHomework = (e) => {
        e.preventDefault();
        
        const payload = {
            time: "11:15 – 12:00",
            subject: subject || "Без предмета",
            topic: topic || "Без темы",
            homework: homeworkText || "Нет описания",
            done: false
        };

        fetch('http://localhost:8080/api/homework', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(newLesson => {
                setSchedule(prev => [...prev, newLesson]);
                setSubject('');
                setTopic('');
                setHomeworkText('');
                setIsAdding(false);
            })
            .catch(err => console.error('Ошибка отправки:', err));
    };

    if (loading) return <div className="vk-phone-frame">Загрузка данных...</div>;

    return (
        <div className="vk-phone-frame">
            <header className="vk-header">
                <div className="vk-header-left">
                    <span className="vk-close-icon">✕</span>
                    <span className="vk-app-title">Школьный Дневник</span>
                </div>
                <span className="vk-dots-icon">•••</span>
            </header>

            <div className="vk-app-content">
                {activeTab === 'schedule' ? (
                    <>
                        <div className="day-heading">
                            <h3>Понедельник, 14 сентября</h3>
                            <button className="add-task-btn" onClick={() => setIsAdding(!isAdding)}>
                                {isAdding ? 'Отмена' : '+ Добавить ДЗ'}
                            </button>
                        </div>

                        {isAdding && (
                            <form onSubmit={submitHomework} className="homework-form">
                                <input 
                                    type="text" 
                                    placeholder="Предмет" 
                                    value={subject} 
                                    onChange={e => setSubject(e.target.value)} 
                                    className="form-input"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Тема урока" 
                                    value={topic} 
                                    onChange={e => setTopic(e.target.value)} 
                                    className="form-input"
                                />
                                <textarea 
                                    placeholder="Текст домашнего задания" 
                                    value={homeworkText} 
                                    onChange={e => setHomeworkText(e.target.value)} 
                                    className="form-input form-textarea"
                                />
                                <button type="submit" className="form-submit-btn">
                                    Сохранить задание
                                </button>
                            </form>
                        )}

                        {schedule.map(lesson => (
                            <div className="lesson-card" key={lesson.id}>
                                <div className="lesson-header">
                                    <span className="lesson-time">{lesson.time}</span>
                                    <span className="lesson-badge math">{lesson.subject}</span>
                                </div>
                                <h4 className="lesson-topic">Тема: {lesson.topic}</h4>

                                <div className="homework-box">
                                    <div className="homework-author">
                                        <span className="author-badge teacher">🎓 От учителя</span>
                                    </div>
                                    <p className="homework-text">{lesson.homework}</p>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        <div className="day-heading">
                            <h3>Журнал оценок</h3>
                        </div>

                        <div className="diary-stats-card" style={{ marginBottom: '15px' }}>
                            <div className="diary-stat-item">
                                <span className="diary-stat-num">4.62</span>
                                <span className="diary-stat-label">Средний балл</span>
                            </div>
                        </div>

                        {grades.map(grade => (
                            <div className="lesson-card" key={grade.id}>
                                <div className="lesson-header">
                                    <span className="lesson-time">{grade.date}</span>
                                    <span className="lesson-badge math">{grade.subject}</span>
                                </div>
                                <h4 className="lesson-topic">Оценка: {grade.value}</h4>
                            </div>
                        ))}
                    </>
                )}
            </div>

            <nav className="vk-tabbar">
                <div 
                    className={`tabbar-item ${activeTab === 'schedule' ? 'active' : ''}`}
                    onClick={() => setActiveTab('schedule')}
                >
                    <span className="tab-icon">📅</span>
                    <span className="tab-label">Расписание</span>
                </div>
                <div 
                    className={`tabbar-item ${activeTab === 'grades' ? 'active' : ''}`}
                    onClick={() => setActiveTab('grades')}
                >
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
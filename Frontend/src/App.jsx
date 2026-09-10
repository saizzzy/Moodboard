import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Загрузка...')

  useEffect(() => {
    fetch('http://localhost:8080/api/health')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error('Ошибка при запросе к Go backend:', err)
        setMessage('Не удалось подключиться к серверу')
      })
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Moodboard App</h1>
      <p>Статус бэкенда: <strong>{message}</strong></p>
    </div>
  )
}

export default App
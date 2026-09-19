import React from 'react';
import ReactDOM from 'react-dom/client';
import './design.css';

function MyPage() {
    return (
        <div className="page-container">
            <div className="panel-box-one">
                <button className="shedule-button">Shedule</button>
                <button className="rating-button">Rating</button>
                <button className="profile-button">Profile</button>
            </div>

            <div className="panel-box-two">
                <div className="title">Moodboard</div>
                <button className="other-options">
                    ...
                </button>
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MyPage />
    </React.StrictMode>
);

export default MyPage;
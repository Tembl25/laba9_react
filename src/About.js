
import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div>
            <h2>О нас</h2>
            <div>
                <Link to="/">На главную</Link>
                <button onClick={() => window.history.back()}>Назад</button>
            </div>
            {/* Дополнительный контент для домашней страницы */}
        </div>
    );
};

export default About;

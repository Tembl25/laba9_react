import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './infotable.css';

import f1 from './img/dstu.jpeg';
import f2 from './img/logo.jpeg';


const InfoTable = ({ faculty, deanName, department, headOfDepartment, studentName, group }) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // переход на предыдущую страницу
    };

    return (
        <div className="info-table-container">
            <table>
                <tbody>
                <tr>
                    <td><img src={f1} alt="Картинка 1" /></td>
                    <td><img src={f2} alt="Картинка 2" /></td>
                </tr>
                <tr>
                    <td>Факультет: {faculty}</td>
                </tr>
                <tr>
                    <td>Декан: {deanName}</td>
                </tr>
                <tr>
                    <td>Кафедра: {department}</td>
                </tr>
                <tr>
                    <td>Заведующий кафедрой: {headOfDepartment}</td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <ul>
                            <li><a href="https://donstu.ru">Сайт ДГТУ</a></li>
                            <li><a href="https://my.e.donstu.ru">Мой ДГТУ</a></li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
            <p>Автор: {studentName} из группы {group}</p>

            {/* Навигационные кнопки */}
            <div>
                <button onClick={goBack}>Назад</button>
                <Link to="/">На главную</Link>
            </div>
        </div>
    );
};

export default InfoTable;

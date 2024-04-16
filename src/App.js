
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import InfoTable from './InfoTable';

function App() {
    return (
        <Router>
            <div className="App">
                <nav style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '10px' }}>
                        <li><Link to="/">Домой</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/contact">Контакты</Link></li>
                        <li><Link to="/services">Услуги</Link></li>
                        <li><Link to="/info">Информация</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/info" element={<InfoTable
                        faculty="Информационные технологии"
                        deanName="Иванов Иван Иванович"
                        department="Программной инженерии"
                        headOfDepartment="Петров Петр Петрович"
                        studentName="Петров Петр Петрович"
                        group="ВПР-41"
                    />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

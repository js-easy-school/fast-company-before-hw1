import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from './layouts/users';
import Login from './layouts/login';
import Main from './layouts/main';
import NavBar from './components/ui/navBar';
import { useNavigate } from 'react-router-dom'; // Добавить инструкцию импорта

function App() {
    const navigate = useNavigate(); // Добавить хук
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/users/:userId?" element={<Users />} />
                <Route path="/login/:type?" element={<Login />} />
                <Route path="/" element={<Main />} />
                <Route
                    path="*"
                    element={() => {
                        navigate('/'); // Использовать useNavigate вместо Redirect
                        return null;
                    }}
                />
            </Routes>
        </div>
    );
}

export default App;

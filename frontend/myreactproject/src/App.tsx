import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';
import GoogleRegister from './pages/auth/Register';
import Login from './pages/auth/login'
import Account from './pages/account/account'
import { GoogleOAuthProvider } from '@react-oauth/google';


const App: React.FC = () => {
    return (
        <GoogleOAuthProvider clientId="493735588229-7tn4qrs22e404m7te2gffriqpthdav2r.apps.googleusercontent.com">
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/register" element={<GoogleRegister />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/account' element={<Account/>}/>  
                </Routes>
            </Router>
        </GoogleOAuthProvider>
    );
};

export default App;

    
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage";
import GoogleRegister from "./pages/auth/Register";
import GoogleLogin from "./pages/auth/login";
import Account from "./pages/account/account";
import CreateCourse from "./pages/course/Courses";
import CourseDetail from "./pages/course/CourseDetail";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Layout from './pages/mainPage/Layout';

const App: React.FC = () => {
    return (
        <GoogleOAuthProvider 
            clientId="493735588229-7tn4qrs22e404m7te2gffriqpthdav2r.apps.googleusercontent.com"
        >
            <Router>
                <Routes>
                    <Route path="/" element={<Layout><MainPage /></Layout>} />
                    <Route path="/register" element={<Layout><GoogleRegister /></Layout>} />
                    <Route path="/login" element={<Layout><GoogleLogin /></Layout>} />
                    <Route path="/account" element={<Layout><Account /></Layout>} />
                    <Route path="/create_course" element={<Layout><CreateCourse /></Layout>} />
                    <Route path="/courses" element={<Layout><MainPage activePage="courses" /></Layout>} />
                    <Route path="/courses/:id/*" element={<Layout><CourseDetail /></Layout>} />
                </Routes>
            </Router>
        </GoogleOAuthProvider>
    );
};

export default App;
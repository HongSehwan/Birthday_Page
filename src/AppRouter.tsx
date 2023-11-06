import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Nav from "./components/nav";
import Musicbox from "./components/musicbox";
import Gift from "./components/gift";
import Main from "./pages/main";
import Letter from "./pages/letter";
import Row from "react-bootstrap/Row";

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <div className="main-page">
                    <Nav />
                    <Row className="route-container">
                        <Routes>
                            <Route path="/main/*" element={<Main />} />
                            <Route path="/letter/*" element={<Letter />} />
                            <Route path="/" element={<Navigate replace to="/main" />} />
                        </Routes>
                        <Musicbox />
                        <Gift />
                    </Row>
                </div>
            </BrowserRouter>
        </>
    );
};
export default AppRouter;

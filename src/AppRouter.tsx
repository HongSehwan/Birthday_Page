import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Nav from "./components/nav";
import Musicbox from "./components/musicbox";
import Gift from "./components/gift";
import Main from "./pages/main";
import Row from "react-bootstrap/Row";
import whiteIMG from "./assets/images/white_background.jpeg";
import HONGLetter from "./assets/letter/HONG_letter.jpeg";
import HONGLetterCover from "./assets/letter/HONG_letter_cover.jpeg";
import JJOOLetter from "./assets/letter/JJOO_letter.jpeg";
import JJOOLetterCover from "./assets/letter/JJOO_letter_cover.jpeg";
import styled from "styled-components";

const AppRouter = () => {
    const [lightOpacity, setLightOpacity] = useState<number>(0);
    const [areaIndex, setAreaIndex] = useState<number>(1);
    const [letterIndex, setLetterIndex] = useState<number>(1);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll); //clean up
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY < 2000) {
            setLightOpacity(0);
            setAreaIndex(1);
            setLetterIndex(1);
        } else if (window.scrollY >= 2000 && window.scrollY < 2100) {
            setLightOpacity(90);
            setAreaIndex(1156);
            setLetterIndex(1157);
        } else if (window.scrollY >= 2100) {
            setLightOpacity(100);
            setAreaIndex(1156);
            setLetterIndex(1157);
        }
    };

    const LightImg = styled.img`
        position: absolute;
        opacity: ${lightOpacity}%;
        z-index: ${areaIndex};
        @media screen and (max-width: 1024px) {
            display: none;
        }
    `;

    const HongLetterCoverImg = styled.img`
        position: absolute;
        top: 100px;
        left: 80px;
        width: 200px;
        height: 200px;
        opacity: ${lightOpacity}%;
        z-index: ${letterIndex};
        transform: rotate(-30deg);
        @media screen and (max-width: 1024px) {
            display: none;
        }
        @media screen and (min-width: 1500px) {
            top: 130px;
            left: 110px;
            width: 260px;
            height: 260px;
        }
    `;

    const HongLetterImg = styled.img`
        position: absolute;
        top: 100px;
        left: 280px;
        width: 350px;
        height: 500px;
        opacity: ${lightOpacity}%;
        z-index: ${letterIndex};
        @media screen and (max-width: 1024px) {
            display: none;
        }
        @media screen and (min-width: 1500px) {
            top: 130px;
            left: 380px;
            width: 510px;
            height: 700px;
        }
    `;

    const JJooLetterCoverImg = styled.img`
        position: absolute;
        top: 100px;
        left: 1150px;
        width: 200px;
        height: 200px;
        opacity: ${lightOpacity}%;
        z-index: ${letterIndex};
        transform: rotate(30deg);
        @media screen and (max-width: 1024px) {
            display: none;
        }
        @media screen and (min-width: 1500px) {
            top: 130px;
            left: 1530px;
            width: 260px;
            height: 260px;
        }
    `;

    const JJooLetterImg = styled.img`
        position: absolute;
        top: 100px;
        left: 800px;
        width: 350px;
        height: 500px;
        opacity: ${lightOpacity}%;
        z-index: ${letterIndex};
        @media screen and (max-width: 1024px) {
            display: none;
        }
        @media screen and (min-width: 1500px) {
            top: 130px;
            left: 1020px;
            width: 510px;
            height: 700px;
        }
    `;

    return (
        <>
            <BrowserRouter>
                <div className="main-page no-scroll">
                    <Row className="route-container no-scroll">
                        <LightImg src={whiteIMG} alt="Background" />
                        <HongLetterCoverImg src={HONGLetterCover} alt="Cover" />
                        <HongLetterImg src={HONGLetter} alt="Letter" />
                        <JJooLetterCoverImg src={JJOOLetterCover} alt="Cover" />
                        <JJooLetterImg src={JJOOLetter} alt="Letter" />
                        <Nav />
                        <Routes>
                            <Route path="/main/*" element={<Main />} />
                            <Route path="/" element={<Navigate replace to="/main" />} />
                        </Routes>
                        <div className="sideArea">
                            <Musicbox />
                            <Gift />
                        </div>
                    </Row>
                </div>
            </BrowserRouter>
        </>
    );
};
export default AppRouter;

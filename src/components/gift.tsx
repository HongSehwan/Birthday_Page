import React, { useEffect, useState } from "react";
import gift1 from "../assets/icons/gift1.png";
import gift2 from "../assets/icons/gift2.png";
import gift3 from "../assets/icons/gift3.png";
import gift4 from "../assets/icons/gift4.png";
import gift5 from "../assets/icons/gift5.png";
import gift6 from "../assets/icons/gift6.png";
import gift7 from "../assets/icons/gift7.png";
import gift8 from "../assets/icons/gift8.png";
import s_light from "../assets/icons/small-light.png";
import m_light from "../assets/icons/middle-light.png";
import whiteIMG from "../assets/images/white_background.jpeg";
import styled from "styled-components";

const Gift = () => {
    const [giftBox, setGiftBox] = useState<any | []>([]);
    const [light, setLight] = useState<any | []>([]);
    const [giftIdx, setGiftIdx] = useState<number>(0);
    const [lightIdx, setLightIdx] = useState<number>(0);
    const [giftOpacity, setGiftOpacity] = useState<number>(100);
    const [lightOpacity, setLightOpacity] = useState<number>(0);

    useEffect(() => {
        setGiftBox([gift1, gift2, gift3, gift4, gift5, gift6, gift7, gift8]);
        setLight([s_light, m_light]);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll); //clean up
        };
    }, []);

    const handleScroll = () => {
        console.log(window.scrollY);
        if (window.scrollY < 100) {
            // 스크롤이 100px 미만일경우 Index 0을 넣어줌
            setGiftIdx(0);
        }
        // 스크롤이 Top에서 100px 이상 내려오면 Index 값을 useState에 넣어줌
        if (window.scrollY >= 100 && window.scrollY < 300) {
            setGiftIdx(1);
        } else if (window.scrollY >= 300 && window.scrollY < 500) {
            setGiftIdx(2);
        } else if (window.scrollY >= 500 && window.scrollY < 700) {
            setGiftIdx(3);
        } else if (window.scrollY >= 700 && window.scrollY < 900) {
            setGiftIdx(4);
        } else if (window.scrollY >= 900 && window.scrollY < 1100) {
            setGiftIdx(5);
        } else if (window.scrollY >= 1100 && window.scrollY < 1300) {
            setGiftIdx(6);
        } else if (window.scrollY >= 1300) {
            setGiftIdx(7);
        }

        if (window.scrollY >= 1500 && window.scrollY < 1600) {
            setLightIdx(0);
        } else if (window.scrollY >= 1600) {
            setLightIdx(1);
        }

        if (window.scrollY < 1700) {
            setGiftOpacity(100);
            setLightOpacity(0);
        } else if (window.scrollY >= 1700 && window.scrollY < 1800) {
            setGiftOpacity(80);
            setLightOpacity(40);
        } else if (window.scrollY >= 1800 && window.scrollY < 1900) {
            setGiftOpacity(50);
            setLightOpacity(70);
        } else if (window.scrollY >= 2000) {
            setGiftOpacity(10);
            setLightOpacity(90);
        }
    };

    const GiftContainer = styled.div`
        width: 100%;
        height: 27vh;
        justify-content: flex-end;
        display: flex;
        opacity: ${giftOpacity}%;
        @media screen and (max-width: 1024px) {
            display: none;
        }
        @media screen and (min-width: 1500px) {
            justify-content: center;
            margin-left: 27px;
        }
    `;

    const GiftBox = styled.div`
        width: 17.5rem;
        display: flex;
        border-radius: 5px;
        margin-right: 10px;
        margin-top: 15px;
        justify-content: center;
        @media screen and (min-width: 1500px) {
            width: 20rem;
        }
    `;

    const GiftImg = styled.img`
        height: 170px;
        margin-top: 15px;
        z-index: 999;
        position: fixed;
        @media screen and (min-width: 1500px) {
            width: 200px;
            height: 200px;
            margin-top: 25px;
        }
    `;

    const LightImg = styled.img`
        width: 300px;
        height: 170px;
        margin-top: 15px;
        z-index: 1000;
        position: fixed;
        @media screen and (min-width: 1500px) {
            width: 545px;
            height: 200px;
            margin-top: 25px;
            margin-left: 27px;
        }
    `;

    const WhiteImg = styled.img`
        width: 300px;
        height: 170px;
        z-index: 1000;
        position: fixed;
        opacity: ${lightOpacity}%;
        @media screen and (min-width: 1500px) {
            margin-top: -650px;
            width: 3500px;
            height: 1300px;
        }
    `;
    return (
        <GiftContainer className="gift-container">
            <GiftBox className="gift-box">
                <GiftImg src={giftBox[giftIdx]} alt="Gift" />
                <LightImg className={window.scrollY >= 1500 ? "" : "d-none"} src={light[lightIdx]} alt="Light" />
                <WhiteImg className={giftIdx >= 7 ? "" : "d-none"} src={whiteIMG} alt="Light" />
            </GiftBox>
        </GiftContainer>
    );
};

export default Gift;

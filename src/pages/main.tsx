import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
// import $ from "jquery";
import $ from "jquery";
import "../assets/scss/main.scss";
import film1 from "../assets/picture/film1.jpeg";
import film2 from "../assets/picture/film2.jpeg";
import film3 from "../assets/picture/film3.jpeg";
import film4 from "../assets/picture/film4.jpeg";
import film5 from "../assets/picture/film5.jpeg";
import film6 from "../assets/picture/film6.jpeg";
import film7 from "../assets/picture/film7.jpeg";
import film8 from "../assets/picture/film8.jpeg";
import film9 from "../assets/picture/film9.jpeg";
import film10 from "../assets/picture/film10.jpeg";

const Main = () => {
    useEffect(() => {
        if ($(".slider-birthday").length > 0) {
            (function ($) {
                $(".slider-birthday").bxSlider({
                    auto: true,
                    speed: 50000,
                    mode: "horizontal",
                    preloadImages: "all",
                    touchEnabled: false,
                    autoDirection: "next",
                    autoControls: false,
                    pager: false,
                    captions: false,
                    useCSS: false,
                    ticker: true,
                });
            })(jQuery);
        }
    }, []);

    const [playIndex, setPlayIndex] = useState(0);
    const playList = [
        { index: 1, url: "/video/birthday.mp4" },
        { index: 2, url: "/video/painting.mp4" },
    ];

    const handleNextVideo = (video: string | any[], playIndex: number) => {
        if (playIndex === video.length - 1) {
            setPlayIndex(0);
        } else {
            setPlayIndex(playIndex + 1);
        }
    };

    const selectVideo = (index: number) => {
        setPlayIndex(index);
    };

    return (
        <>
            <main>
                <div className="container">
                    <ReactPlayer
                        className="video-container"
                        url={playList[playIndex].url} // 플레이어 url
                        playing
                        muted
                        progressInterval={1000}
                        pip={true}
                        onEnded={() => handleNextVideo(playList, playIndex)} // 플레이어 끝났을 때 이벤트
                    />
                    {/* <source id="video1" src="/video/birthday.mp4" type="video/mp4" />
                        <source id="video2" src="/video/painting.mp4" type="video/mp4" /> */}
                    <div className="slider-container">
                        <ul className="slider2 slider-birthday">
                            <div className="five-items">
                                <li>
                                    <img className="slider-image" src={film1} alt="Film1" />
                                </li>
                                <li>
                                    <img className="slider-image" src={film2} alt="Film2" />
                                </li>
                                <li>
                                    <img className="slider-image" src={film3} alt="Film3" />
                                </li>
                                <li>
                                    <img className="slider-image" src={film4} alt="Film4" />
                                </li>
                                <li>
                                    <img className="slider-image" src={film5} alt="Film5" />
                                </li>
                            </div>
                            <div className="five-items">
                                <li>
                                    <img className="slider-image" src={film6} alt="Film6" />
                                </li>
                                <li>
                                    <img className="slider-image" src={film7} alt="Film7" />
                                </li>
                                <li>
                                    <img className="slider-image" src={film8} alt="Film8" />
                                </li>
                                <li>
                                    <img className="slider-image" src={film9} alt="Film9" />
                                </li>
                                <li>
                                    <img className="slider-image" src={film10} alt="Film10" />
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main;

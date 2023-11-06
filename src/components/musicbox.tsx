import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import moment from "moment";

const Musicbox = () => {
    const [playIndex, setPlayIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState<number | string>("00:00");
    const [fullTime, setFullTime] = useState<number | string>(0);
    const [nowPlaying, setNowPlaying] = useState(false);
    const audioRef = useRef<any>(null);
    const ref = useRef<any>(null);

    // const startTime = Math.floor(currentTime);
    // const totalTime = (audioRef && audioRef.current && audioRef.current.duration) || 0;
    // const videoElement = audioRef && audioRef.current;

    const playList = [
        { index: 1, url: "/audio/suzy_happybirthday.mp3" },
        { index: 2, url: "/audio/someday_doyouknow.mp3" },
    ];

    const handleNextAudio = (audio: string | any[], playIndex: number) => {
        if (playIndex === audio.length - 1) {
            setPlayIndex(0);
        } else {
            setPlayIndex(playIndex + 1);
        }
    };

    const selectVideo = (index: number) => {
        setPlayIndex(index);
    };

    const audioPlayer = document.querySelector(".audio-player") as HTMLElement;
    const audio = new Audio("/audio/suzy_happybirthday.mp3");

    // 동영상 시간 업데이트 함수
    // const addTimeUpdate = () => {
    //     if (audio) {
    //         audio.addEventListener("timeupdate", function () {
    //             setCurrentTime(audio.currentTime);
    //         });
    //         if (audioPlayer !== null) {
    //             const playBtn = audioPlayer.querySelector(".controls .toggle-play") as HTMLElement;
    //             // 컴포넌트가 처음 마운트 될 때 동영상 시작 할지 말지 여부 (여기서는 시작되게 했음)
    //             setNowPlaying(true);
    //             playBtn.classList.remove("play");
    //             playBtn.classList.add("pause");
    //             audio.play();
    //         }
    //     }
    // };

    // useEffect(() => {
    //     addTimeUpdate();
    // }, []);

    console.dir(audio);

    audio.addEventListener(
        "loadeddata",
        () => {
            setFullTime(moment(audio.duration * 1000).format("mm:ss"));
            audio.volume = 0.75;
        },
        false
    );

    //click on timeline to skip around
    if (audioPlayer !== null) {
        const timeline = audioPlayer.querySelector(".timeline") as HTMLElement;
        timeline.addEventListener(
            "click",
            (e) => {
                const timelineWidth = window.getComputedStyle(timeline).width;
                const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
                audio.currentTime = timeToSeek;
            },
            false
        );

        //click volume slider to change volume
        const volumeSlider = audioPlayer.querySelector(".controls .volume-slider") as HTMLElement;
        volumeSlider.addEventListener(
            "click",
            (e) => {
                const sliderWidth = window.getComputedStyle(volumeSlider).width;
                const newVolume = e.offsetX / parseInt(sliderWidth);
                audio.volume = newVolume;
                const volumeControls = audioPlayer.querySelector(".controls .volume-percentage") as HTMLElement;
                volumeControls.style.width = newVolume * 100 + "%";
            },
            false
        );
        // //check audio percentage and update time accordingly
        // setInterval(() => {
        //     const progressBar = audioPlayer.querySelector(".progress") as HTMLElement;
        //     progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
        //     const update_time: any = audioPlayer.querySelector(".time .current") as HTMLElement;
        //     update_time.textContent = setCurrentTime(moment(audio.currentTime * 1000).format("mm:ss"));
        // }, 500);

        // //toggle between playing and pausing on button click
        const playBtn = audioPlayer.querySelector(".controls .toggle-play") as HTMLElement;
        playBtn.addEventListener(
            "click",
            () => {
                if (audio.paused) {
                    playBtn.classList.remove("play");
                    playBtn.classList.add("pause");
                    audio.play();
                } else {
                    playBtn.classList.remove("pause");
                    playBtn.classList.add("play");
                    audio.pause();
                }
            },
            false
        );

        const volumeBtn = audioPlayer.querySelector(".volume-button") as HTMLElement;
        volumeBtn.addEventListener("click", () => {
            const volumeEl = audioPlayer.querySelector(".volume-container .volume") as HTMLElement;
            audio.muted = !audio.muted;
            if (audio.muted) {
                volumeEl.classList.remove("icono-volumeMedium");
                volumeEl.classList.add("icono-volumeMute");
            } else {
                volumeEl.classList.add("icono-volumeMedium");
                volumeEl.classList.remove("icono-volumeMute");
            }
        });
    }

    return (
        <div className="music-container">
            <div className="music-box">
                <ReactPlayer
                    id="audio"
                    className="audio-container"
                    ref={audioRef}
                    url={playList[playIndex].url} // 플레이어 url
                    playing
                    controls
                    progressInterval={1000}
                    pip={true}
                    onEnded={() => handleNextAudio(playList, playIndex)} // 플레이어 끝났을 때 이벤트
                />
                {/* <div className="player-area"></div>
                <div className="audio-player" ref={ref}>
                    <div className="timeline">
                        <div className="progress"></div>
                    </div>
                    <div className="controls">
                        <div className="play-container">
                            <div className="toggle-play play"></div>
                        </div>
                        <div className="time">
                            <div className="current">00:00</div>
                            <div className="divider">/</div>
                            <div className="length"></div>
                        </div>
                        <div className="name">Music Song</div>
                        <div className="volume-container">
                            <div className="volume-button">
                                <div className="volume icono-volumeMedium"></div>
                            </div>

                            <div className="volume-slider">
                                <div className="volume-percentage"></div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Musicbox;

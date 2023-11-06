import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import { playList, playName } from "./playerData/music_resource";

const Musicbox = () => {
    const [playIndex, setPlayIndex] = useState(0);
    const audioRef = useRef<any>(null);

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
            </div>
        </div>
    );
};

export default Musicbox;

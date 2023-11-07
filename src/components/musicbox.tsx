import React, { useState, useRef } from "react";
import ReactPlayer from "react-player/lazy";
import { playList, playName, DetailInfo } from "./playerData/resource";
import List from "./list";

const Musicbox = () => {
    const [playIndex, setPlayIndex] = useState(0);
    const [playListName, setPlayListName] = useState<DetailInfo[]>(playName.slice(0, 10));
    const audioRef = useRef<any>(null);

    const handleNextAudio = (audio: string | any[], playIndex: number) => {
        if (playIndex === audio.length - 1) {
            setPlayListName(playName.slice(0, 10));
            setPlayIndex(0);
        } else {
            if (playIndex <= 8) {
                setPlayListName(playName.slice(0, 10));
            } else if (playIndex >= 9 && playIndex <= 18) {
                setPlayListName(playName.slice(10, 20));
            } else {
                setPlayListName(playName.slice(20, 29));
            }
            setPlayIndex(playIndex + 1);
        }
    };

    const selectVideo = (index: number) => {
        setPlayIndex(index);
    };

    return (
        <div className="music-container">
            <div className="music-box">
                <div className="listName">
                    {playListName.map((item: any) => (
                        <List item={item} playIdx={playIndex} key={item.index} />
                    ))}
                </div>
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

import React from "react";

const List = (props: any) => {
    return (
        <div>
            <div className="pendingTrack">
                <img className="trackIMG" src={props.item.cover} alt="Cover" />
                {props.item.index - 1 === props.playIdx ? (
                    <div className="marquee">
                        <div className="track">
                            <span className="text -r">
                                {props.item.name}
                                <span className="-green">{props.item.name}</span>
                            </span>
                            <span className="text -r">
                                {props.item.name}
                                <span className="-green">{props.item.name}</span>
                            </span>
                            <span className="text -r">
                                {props.item.name}
                                <span className="-green">{props.item.name}</span>
                            </span>
                            <span className="text -r">
                                {props.item.name}
                                <span className="-green">{props.item.name}</span>
                            </span>
                        </div>
                    </div>
                ) : (
                    <>
                        <li className="playList">{props.item.name}</li>
                    </>
                )}
            </div>
        </div>
    );
};

export default List;

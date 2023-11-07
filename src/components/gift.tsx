import React, { useEffect, useState } from "react";
import gift1 from "../assets/icons/gift1.png";
import gift2 from "../assets/icons/gift2.png";
import gift3 from "../assets/icons/gift3.png";
import gift4 from "../assets/icons/gift4.png";
import gift5 from "../assets/icons/gift5.png";
import gift6 from "../assets/icons/gift6.png";
import gift7 from "../assets/icons/gift7.png";
import gift8 from "../assets/icons/gift8.png";

const Gift = () => {
    const [giftBox, setGiftBox] = useState<any | []>([]);
    const [giftIdx, setGiftIdx] = useState<number>(0);
    useEffect(() => {
        setGiftBox([gift1, gift2, gift3, gift4, gift5, gift6, gift7, gift8]);
    }, []);
    return (
        <div className="gift-container">
            <div className="gift-box">
                <img className="gift-image" style={{ height: "170px", marginTop: "15px" }} src={giftBox[giftIdx]} alt="Gift" />
            </div>
        </div>
    );
};

export default Gift;

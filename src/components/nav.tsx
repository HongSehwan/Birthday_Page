import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Cat from "../assets/icons/cat.png";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import DetailModal from "./detailModal";

const Navigation = () => {
    const [modalShow, setModalShow] = React.useState(false);

    const navigate = useNavigate();
    const goHome = () => {
        navigate("/main");
    };

    useEffect(() => {
        // const homeBtn = document.getElementById("#mainBtn");
        // console.log(homeBtn);
    }, []);

    return (
        <>
            <Row className="nav-wrapper">
                <img className="cat-logo" src={Cat} alt="Cat" onClick={goHome} />
                <Nav variant="underline" defaultActiveKey="/main">
                    <Nav.Item>
                        <Nav.Link className="nav-main" href="/main">
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => setModalShow(true)}>Message</Nav.Link>
                    </Nav.Item>
                    <DetailModal show={modalShow} onHide={() => setModalShow(false)} />
                </Nav>
            </Row>
        </>
    );
};

export default Navigation;

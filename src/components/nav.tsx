import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Cat from "../assets/icons/cat.png";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
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
            <Row>
                <img className="cat-logo" src={Cat} alt="Cat" onClick={goHome} />
                <Nav variant="underline" defaultActiveKey="/main">
                    <Nav.Item>
                        <Nav.Link href="/main">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/letter">Message</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item> */}
                </Nav>
            </Row>
        </>
    );
};

export default Navigation;

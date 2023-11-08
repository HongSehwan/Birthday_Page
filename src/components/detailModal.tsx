import React from "react";
import { Row, Button, Modal } from "react-bootstrap";
import Giving from "../assets/images/gift_giving.jpeg";
import Gift from "../assets/images/gift_voucher_removebg.png";

const DetailModal = (props: boolean | any) => {
    return (
        <div>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header>
                    <Modal.Title className="contained-modal-title-vcenter">Happy Birthday to you♥️</Modal.Title>
                </Modal.Header>
                <Modal.Body className="grid-example">
                    <Row>
                        {/* <img className="gift-giving" src={Giving} alt="Gift Giving" />
                        <img className="gift-voucher" src={Gift} alt="Gift Giving" /> */}
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>선물 전달</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default DetailModal;

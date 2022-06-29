import './modal.css'
import {Button,Modal,Form} from 'react-bootstrap';
import { useState } from 'react';


function PopUp({showModal,setShowModal, modalData}){
    const [input, setInput] = useState("");
    const handleInput = (e) =>{
        setInput(e.target.value)
    }
    return <Modal className='popup' centered size="sm" show={showModal} onHide={()=>{
            setShowModal(false);
            }}>
            <Modal.Header closeButton className="header">
                <Modal.Title>
                    {modalData.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='body'>
                {modalData.content}
                {modalData.isInput ?   <Form.Control onChange={handleInput} type="key" placeholder="Private Key" />:null}
            </Modal.Body>
            <Modal.Footer className='footer'>
            <Button variant="secondary" onClick={()=>{setShowModal(false)}}>닫기</Button>
            <Button variant="primary" className="okButton" onClick={()=>{
                modalData.onConfirm(input);
                setShowModal(false);
            }}>진행</Button>
            </Modal.Footer>
        </Modal>
}

export default PopUp;

//Components
import TicketSilder from '../components/ticketSlider';
import Tickets from '../components/tickets';
import Head from '../components/head';
import PopUp from '../components/modal';
import QrComponent from '../components/qrcode';

import {fetchTicketsOf} from '../db/dbController.js';
import {useState, useEffect} from 'react';

const DEFAULT = 'DEFAULT'


const isMobile = window.screen.width >= 1280 ? false : true;

function MyTickets() {
  const [qrvalue, setQrvalue] = useState(DEFAULT);
  const [tickets, setTickets] = useState([])
  const [myAddress, setMyAddress] = useState(DEFAULT)
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    title:"MODAL",
    content:"content",
    onConfirm : () =>{},
  });

  const getUserData = () =>{
    setModalData({
      title:"로그인",
      content:"로그인하시겠습니까?",
      onConfirm: ()=>{
        setMyAddress('0xTestPrivateKey1');
      }
    })
    setShowModal(true)
  }

  const fetchMyTickets = async () =>{
    // if (myAddress == DEFAULT_ADDRESS){
    //   alert("NO ADDRESS");
    //   return;
    // }
    const _tickets = await fetchTicketsOf(myAddress)
    console.log(_tickets)
    setTickets(_tickets);
  }

  useEffect((el)=>{
    fetchMyTickets()
  },[myAddress  ])

  return (
    <div className="MyTickets">
      <Head myAddress={myAddress} getUserData={getUserData}/>

      <QrComponent qrvalue={qrvalue} setQrvalue ={setQrvalue}/>

      {isMobile ? <TicketSilder tickets={tickets} /> : <Tickets tickets={tickets}/>}
      <PopUp showModal={showModal} setShowModal={setShowModal} modalData={modalData}/>
    </div>
  );
}

export default MyTickets;

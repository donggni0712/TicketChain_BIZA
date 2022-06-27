
//Components
import TicketSilder from '../components/ticketSlider';
import Tickets from '../components/tickets';
import Head from '../components/head';
import PopUp from '../components/modal';
import QrComponent from '../components/qrcode';

import {fetchTicketsOf} from '../db/dbController.js';
import {useState, useEffect} from 'react';
//import * as KlipAPI from "../api/UseKlip.js"

const DEFAULT_QR_CODE = 'DEFAULT'


const isMobile = window.screen.width >= 1280 ? false : true;

function MyTickets() {
  const [qrvalue, setQrvalue] = useState(DEFAULT_QR_CODE);
  const [tickets, setTickets] = useState([])
  const [myAddress, setMyAddress] = useState('0xTestPrivateKey1')
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    title:"MODAL",
    content:"content",
    onConfirm : () =>{},
  });

  // const getUserData = () =>{
    // setModalData({
    //   title:"Klip 지갑 연동",
    //   content:"진행을 누르면 지갑 연동이 진행됩니다.",
    //   onConfirm: ()=>{
    //     KlipAPI.getAddress(setQrvalue, async (address)=>{
    //         setMyAddress(address);
    //       });
    //   }
    // })
    // setShowModal(true)
  //}

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
  },[])

  return (
    <div className="MyTickets">
      {/* <Head myAddress={myAddress} getUserData={getUserData}/> */}

      <QrComponent qrvalue={qrvalue} setQrvalue ={setQrvalue}/>

      {isMobile ? <TicketSilder tickets={tickets} /> : <Tickets tickets={tickets}/>}
      <PopUp showModal={showModal} setShowModal={setShowModal} modalData={modalData}/>
    dd
    </div>
  );
}

export default MyTickets;


//Components
import TicketSilder from '../components/ticketSlider';
import Tickets from '../components/tickets';

import PopUp from '../components/modal';
//import QrComponent from '../components/qrcode';
import Footer from '../components/footer';

import {fetchTicketsOf, getPublicKey} from '../db/dbController.js';
import {useState, useEffect} from 'react';

const DEFAULT = 'DEFAULT'


const isMobile = window.screen.width >= 1280 ? false : true;

function MyTickets({walletsDB, ticketsDB, ticketOwnersDB, setTicketsDB, setWalletsDB, setTicketOwnersDB, myAddress, showModal, setShowModal, modalData, setTab}) {
  //const [qrvalue, setQrvalue] = useState(DEFAULT);

  const [tickets, setTickets] = useState([]);
 
  const fetchMyTickets = async () =>{
    // if (myAddress == DEFAULT_ADDRESS){
    //   alert("NO ADDRESS");
    //   return;
    // }
    const _tickets = await fetchTicketsOf(myAddress, ticketOwnersDB, ticketsDB)
     setTickets(_tickets);
  }

  useEffect((el)=>{
    fetchMyTickets()
  },[myAddress])

  return (
    <div className="MyTickets">
      {/* <QrComponent qrvalue={qrvalue} setQrvalue ={setQrvalue}/> */}

      {isMobile ? <TicketSilder tickets={tickets} /> : <Tickets tickets={tickets}/>}
      <PopUp showModal={showModal} setShowModal={setShowModal} modalData={modalData}/>
      <Footer setTab={setTab}/>
    </div>
  );
}

export default MyTickets;

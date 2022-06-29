import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyTickets from './page/myTickets'
import Head from './components/head';
import Footer from './components/footer';
import { useState } from 'react';
import { wallets, tickets, ticketOwners } from './db/constants';
import {getPublicKey} from './db/dbController.js';

function App() {
  const [WalletsDB,setWalletsDB] = useState(wallets)
  const [TicketsDB,setTicketsDB] = useState(tickets)
  const [TicektOwnersDB,setTicketOwnersDB] = useState(ticketOwners)

  const [tab, setTab] = useState("MYTICKETS")
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    title:"MODAL",
    content:"content",
    isInput : false,
    onConfirm : () =>{},
  });

  const [myAddress, setMyAddress] = useState("DEFAULT")
  const getUserData = () =>{
    setModalData({
      title:"로그인",
      content:"privateKey를 입력해주세요.",
      isInput : true,
      onConfirm: (key)=>{
        setMyAddress(getPublicKey(key,WalletsDB));
      }
    })
    setShowModal(true)
  }
  return (
    <div className="App">
      <div className="component">
      <Head myAddress={myAddress} getUserData={getUserData}/>

      {tab=="MYTICKETS" ? <MyTickets walletsDB = {WalletsDB} ticketsDB = {TicketsDB} ticketOwnersDB={TicektOwnersDB} setWalletsDB = {setWalletsDB} setTicketsDB = {setTicketsDB} setTicketOwnersDB = {setTicketOwnersDB}
      myAddress={myAddress} showModal={showModal} setShowModal={setShowModal} modalData={modalData} setTab={setTab} />
  : null}
      <Footer setTab={setTab}/>
      </div>
    </div>
  );
}

export default App;

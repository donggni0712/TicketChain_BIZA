import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyTickets from './page/myTickets'
import { useState } from 'react';
import { wallets, tickets, ticketOwners } from './db/constants';


function App() {
  const [WalletsDB,setWalletsDB] = useState(wallets)
  const [TicketsDB,setTicketsDB] = useState(tickets)
  const [TicektOwnersDB,setTicketOwnersDB] = useState(ticketOwners)
  return (
    <div className="App">
      <div className="component">
      <MyTickets walletsDB = {WalletsDB} ticketsDB = {TicketsDB} ticketOwnersDB={TicektOwnersDB} setWalletsDB = {setWalletsDB} setTicketsDB = {setTicketsDB} setTicketOwnersDB = {setTicketOwnersDB} />
      </div>
    </div>
  );
}

export default App;

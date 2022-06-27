import {wallets,ticketOwners,tickets} from './constants'

function getTicketInfo(id){
  let res = tickets.filter((el)=>{
    if(el.id==id) return true;
    return false;
  })
  //console.log(res)
  return res[0];
}

export const fetchTicketsOf = async (address)=>{
  const ticketIds = [];

  // Fetch Balance
  const _balance = ticketOwners.reduce((sum,el)=>{
     if(el.owner==address){
      // Fetch Token IDs
      const id = el.ticketid
      //console.log(`id = ${id}`)
      ticketIds.push(id);
      sum++
     }
    return sum
   },0)
  //console.log(`balance = ${_balance}`)

  // Fetch Token Names
  const ticketInfos = [];
  for(let cur of ticketIds){
    const ticket = getTicketInfo(cur)
    //console.log(ticket)
    const _ticketInfo = {
      ticketName : ticket.name,
      placeName : ticket.place,
      expired : ticket.expired,
      canTrade : ticket.canTrade,
      imgSrc : ticket.img,
      webUrl : ticket.url
    }
    //console.log(_ticketInfo)
    ticketInfos.push(_ticketInfo);
  }

  const tickets = [];
  for(let i=0;i<_balance;i++){
    tickets.push({info: ticketInfos[i], id:ticketIds[i]})
  }

  return tickets;
}
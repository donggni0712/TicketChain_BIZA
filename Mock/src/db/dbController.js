function getTicketInfo(id, tickets){
  let res = tickets.filter((el)=>{
    if(el.id===id) return true;
    return false;
  })
  //console.log(res)
  return res[0];
}

export function getPublicKey(privateKey, walletsDB){
  const result  = walletsDB.reduce((res,el)=>{
    if(el.privateKey===privateKey){
      res = el.publicKey
    }
    return res
  },"DEFAULT")
  return result;
}

export const fetchTicketsOf = async (address, ticketOwners, tickets)=>{
  const ticketIds = [];

  // Fetch Balance
  const _balance = ticketOwners.reduce((sum,el)=>{
     if(el.owner===address){
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
    const ticket = getTicketInfo(cur,tickets)
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

  const _tickets = [];
  for(let i=0;i<_balance;i++){
    _tickets.push({info: ticketInfos[i], id:ticketIds[i]})
  }

  return _tickets;
}
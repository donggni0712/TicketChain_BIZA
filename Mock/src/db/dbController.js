const db = require("../../models");


export const fetchTicketsOf = async (address)=>{
   db.query(`SELECT * FROM TicketOwners WHERE ownerskey='${address}';`,function(error, tickets){
          // topic id중 queryData.id값과 일치하는 데이터를 가져와 topic에 담음            
            if(error){
                throw error;
            }
            console.log(tickets);
          });

  // // Fetch Balance
  //  const _balance = await TICKETCHAINContract.methods.balanceOf(address).call();
  // console.log(`balance = ${_balance}`)
  // // Fetch Token IDs
  // const tokenIds = [];
  // for(let i=0;i<_balance;i++){
  //   const id = await  TICKETCHAINContract.methods.tokenOfOwnerByIndex(address, i).call();
  //   console.log(`id = ${id}`)
  //   tokenIds.push(id);
  // }
  // // Fetch Token Names
  // const ticketInfos = [];
  // for(let i=0;i<_balance;i++){
  //   const _ticketname = await  TICKETCHAINContract.methods.ticketName(tokenIds[i]).call();
  //   const _expired = await TICKETCHAINContract.methods.ticketExpired(tokenIds[i]).call();
  //   const _placeName = await TICKETCHAINContract.methods.ticketPlaceName(tokenIds[i]).call();
  //   const _canTrade = await TICKETCHAINContract.methods.ticketCanTrade(tokenIds[i]).call();
  //   const _imgSrc = await TICKETCHAINContract.methods.ticketImgsrc(tokenIds[i]).call();
  //   const _WebUrl = await TICKETCHAINContract.methods.ticketWeburl(tokenIds[i]).call();
  //   const _ticketInfo = {
  //     ticketName : _ticketname,
  //     placeName : _placeName,
  //     expired : _expired,
  //     canTrade : _canTrade,
  //     imgSrc : _imgSrc,
  //     webUrl : _WebUrl
  //   }
  //   console.log(_ticketInfo)
  //   ticketInfos.push(_ticketInfo);
  // }

  // const nfts = [];
  // for(let i=0;i<_balance;i++){
  //   nfts.push({info: ticketInfos[i], id:tokenIds[i]})
  // }

  // return nfts;
}


export const getBalance = (address) => {
  // return caver.rpc.klay.getBalance(address).then((response) => {
  //   const balance = caver.utils.convertFromPeb(caver.utils.hexToNumberString(response));
  //   console.log(`BALANCE: ${balance}`);
  //   return balance;
  // })
}
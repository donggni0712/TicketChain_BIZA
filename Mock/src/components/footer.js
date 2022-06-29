
import {Nav} from 'react-bootstrap';

function Footer ({setTab}) {
    
    return <nav style={{backgroundColor: "#1b1717", height: 45}} className="navbar fixed-bottom navbar-light" role="navigation">
          <Nav className="w-100">
            <div className="d-flex flex-row justify-content-around w-100">
              <div onClick={()=>{
                setTab("MARKET")
              }}
              className="row d-flex flex-column justify-content-center align-items-center">
                <div>MARKET</div>
              </div>
               <div onClick={()=>{
                setTab("MYTICKETS")
              }}
              className="row d-flex flex-column justify-content-center align-items-center">
                <div>MY TICKETS</div>
              </div>
               <div onClick={()=>{
                setTab("TRADE")
              }}
              className="row d-flex flex-column justify-content-center align-items-center">
                <div>TRADE</div>
              </div>
            </div>
          </Nav>
        </nav>
}

export default Footer;
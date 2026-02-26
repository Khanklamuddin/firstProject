import React from "react";

function OpenAccount() {
    return (
         <div className="container p-5" >
        <div className="row text-center" >
            <h1 className="mt-5">Open a Zerodha account</h1>
            <p>Modern plateform and apps, ₹0 investment and flat ₹20 Intraday and F&O trades</p>
            <button className="p-2 btn btn-primary fs" style={{width: "20%", margin: "0 auto"}}>Sign Up Now</button>
        </div>
       </div>
    );
}

export default OpenAccount;



// Navbar


//import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
  
      <nav class="navbar navbar-expand-lg bg-light border-bottom">
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img src="media/images/Zerodha_logo.svg" style={{width:"25%"}}></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form class="d-flex" role="search">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  SignUp
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link active" to="/product">
                  Product
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
               <li class="nav-item ">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li>
        
            </ul>
             
            </form>
          </div>
        </div>
      </nav>
 
  );
}

export default Navbar;



// footer


import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(250,250,250)"}}>
    <div className="container border-top mt-5 " >
      <div className="row">
        <div className="col  text-muted">
          <img
            src="media/images/Zerodha_logo.svg "
            style={{ width: "60%" }}
          ></img>
          <p>&copy; 2010 - 2025, Zerodha Broking Ltd.All rights reserved.</p>
        </div>
        <div className="col" >
          <p >Company</p>
          <a href="" style={{textDecoration:"none"}}> Philosophy</a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}> About</a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}> Press & media</a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}> Careers</a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}> Zerodha Cares (CSR)</a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}>Open source</a>
          <br></br>
        </div>
        <div className="col">
          <p>Support</p>
          <a href="" style={{textDecoration:"none"}}> Contact us</a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}> Support portal</a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}> How to file a complaint?</a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}> Status of your complaints</a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}> Bulletin</a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}> Circular</a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}> Z-Connect blog</a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}> Downloads</a>
          <br></br>
        </div>
        <div className="col">
          <p>Account</p>
          <a href="" style={{textDecoration:"none"}}> Open demat account </a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}> Minor demat account </a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}> NRI demat account </a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}>Commodity </a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}> Dematerialisation </a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}> Fund transfer </a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}> MTF </a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}>
            {" "}
            Referral program <br></br>
          </a>
        </div>
        <div className="col">
          <p>Quick Links</p>
          <a href="" style={{textDecoration:"none"}}> Upcoming IPOs</a>
          <br></br>
          <a href="" style={{textDecoration:"none"}}> Brokerage charges</a> <br></br>
          <a href="" style={{textDecoration:"none"}}> Calculator</a> <br></br>
          <a href="" style={{textDecoration:"none"}}> Markets</a> <br></br>
          <a href="" style={{textDecoration:"none"}} > Sectors</a> <br></br>
        </div>
      </div>
      <div className="mt-5  text-small text-muted" style={{fontSize:"12px"}} >
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
          Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
          Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
          Karnataka, India. For any complaints pertaining to securities broking
          please write to{" "}
          <a href="" style={{ textDecoration: "none" }}>
            complaints@zerodha.com
          </a>
          , for DP related to{" "}
          <a href="" style={{ textDecoration: "none" }}>
            dp@zerodha.com
          </a>
          . Please ensure you carefully read the Risk Disclosure Document as
          prescribed by SEBI | ICF
        </p>

        <p>
          Procedure to file a complaint on{" "}
          <a href="" style={{ textDecoration: "none" }}>
            SEBI SCORES
          </a>
          : Register on SCORES portal. Mandatory details for filing complaints
          on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
          Effective Communication, Speedy redressal of the grievances
        </p>

        <a href="" style={{ textDecoration: "none" }}>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
        </a>

        <p>
          nvestments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p>
          Attention investors: 1 Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2 Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p>
          India's largest broker based on networth as per NSE. NSE broker
          factsheet
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>

        <p>
          *Customers availing insurance advisory services offered by Ditto
          (Tacterial Consulting Private Limited | IRDAI Registered Corporate
          Agent (Composite) License No CA0738) will not have access to the
          exchange investor grievance redressal forum, SEBI SCORES/ODR, or
          arbitration mechanism for such products.
        </p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;


import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container">
        <div className="row mt-5 pt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "50%" }}
              className="mb-3"
            />
            <p>&copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.</p>
          </div>
          <div className="col">
            <p>Account</p>
            <a href="">Open demat account</a>
            <br />
            <a href="">Minor demat account</a>
            <br />
            <a href="">NRI demat account</a>
            <br />
            <a href="">HUF demat account</a>
            <br />
            <a href="">Commodity</a>
            <br />
            <a href="">Dematerialisation</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">MTF</a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="">Contact us</a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">How to file a complaint?</a>
            <br />
            <a href="">Status of your complaints</a>
            <br />
            <a href="">Bulletin</a>
            <br />
            <a href="">Circular</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">Downloads</a>
            <br />
          </div>
          <div className="col">
            <p>Company</p>
            <a href="">About</a>
            <br />
            <a href="">Philosophy</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">Zerodha Cares (CSR)</a>
            <br />
            <a href="">Zerodha.tech</a>
            <br />
            <a href="">Open source</a>
            <br />
            <a href="">Referral program</a>
            <br />
          </div>
        </div>
        <div className="row">
          <p className="mt-5 text-small text-muted">
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p className="mt-3 text-small text-muted">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p className="mt-3 text-small text-muted">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p className="mt-3 text-small text-muted">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
        </div>
        <div className="row text-center mt-5 pb-4">
          <div className="col">
            <a href="">NSE</a> <a href="">BSE</a> &nbsp; &nbsp;
            <a href="">MCX</a> &nbsp; &nbsp;<a href="">MSEI</a> &nbsp; &nbsp;
            <a href="">Terms & conditions</a> &nbsp; &nbsp;
            <a href="">Policies & procedures</a> &nbsp; &nbsp;
            <a href="">Privacy policy</a> &nbsp; &nbsp;
            <a href="">Disclosure For investor's attention</a> &nbsp; &nbsp;
            <a href="">Investor charter</a> &nbsp; &nbsp;
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

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
            <p>&copy; 2026, Zenvest. All rights reserved.</p>
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
            <a href="">Blog</a>
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
            <a href="">Zenvest Cares (CSR)</a>
            <br />
            <a href="">Zenvest.tech</a>
            <br />
            <a href="">Open source</a>
            <br />
            <a href="">Referral program</a>
            <br />
          </div>
        </div>
        <div className="row">
          <p className="mt-5 text-small text-muted">
            This is a demo trading platform built for educational purposes. It
            is not a registered stock broker and does not offer real trading,
            investment, or brokerage services. Investments in securities markets
            are subject to market risks; read all related documents carefully
            before investing.
          </p>
        </div>
        <div className="row text-center mt-5 pb-4">
          <div className="col">
            <a href="">Terms & conditions</a> &nbsp; &nbsp;
            <a href="">Policies & procedures</a> &nbsp; &nbsp;
            <a href="">Privacy policy</a> &nbsp; &nbsp;
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

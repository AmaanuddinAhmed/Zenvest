import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="fs-2 mt-5 mb-5">
          To create ticket, select a relevant topic
        </h1>
        <div className="col-4 p-5">
          <h4 className="mb-3">
            <i class="fa-solid fa-circle-plus"></i> Account opening
          </h4>
          <a href="" style={{ lineHeight: "2.5" }}>
            Resident individual
          </a>
          <br />
          <a href="" style={{ lineHeight: "2.5" }}>
            Minor
          </a>
          <br />
          <a href="" style={{ lineHeight: "2.5" }}>
            Non Resident Indian (NRI)
          </a>
          <br />
          <a href="" style={{ lineHeight: "2.5" }}>
            Company, Partnership, HUF and LLP
          </a>
          <br />
          <a href="" style={{ lineHeight: "2.5" }}>
            Glossary
          </a>
          <br />
        </div>
        <div className="col-4 p-5">
          <h4 className="mb-3">
            <i class="fa-solid fa-circle-user"></i> Your Zenvest Account
          </h4>
          <a href="" style={{ lineHeight: "2.5" }}>
            Your Profile
          </a>
          <br />
          <a href="" style={{ lineHeight: "2.5" }}>
            Account modification
          </a>
          <br />
          <a href="" style={{ lineHeight: "2.5" }}>
            Client Master Report (CMR) and Depository Participant (DP)
          </a>
          <br />
          <a href="" style={{ lineHeight: "2.5" }}>
            Nomination
          </a>
          <br />
          <a href="" style={{ lineHeight: "2.5" }}>
            Transfer and conversion of securities
          </a>
          <br />
        </div>
        <div className="col-4 p-5">
          <h4 className="mb-3">
            <i class="fa-solid fa-indian-rupee-sign"></i> Funds
          </h4>
          <a href="" style={{ lineHeight: "2.5" }}>
            Add money
          </a>
          <br />
          <a href="" style={{ lineHeight: "2.5" }}>
            Withdraw money
          </a>
          <br />
          <a href="" style={{ lineHeight: "2.5" }}>
            Add bank accounts
          </a>
          <br />
          <a href="" style={{ lineHeight: "2.5" }}>
            eMandates
          </a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;

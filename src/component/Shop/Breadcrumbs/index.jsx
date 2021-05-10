import React from "react";
import "./Breadcrumbs.css";

function Breadcrumbs(props) {
  return (
    <div>
      <div className="breadcrumbs d-flex flex-row align-items-center">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li className="active">
            <a href="index.html">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
              <span>Thanh</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;

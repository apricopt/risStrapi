import React, { memo } from "react";

import "./myown.css";

import { Block, Container } from "./components";

// importing the react-chart-2 libraries here
import { Doughnut } from "react-chartjs-2";

const HomePage = ({ global: { plugins }, history: { push } }) => {
  return (
    <>
      <Container className="container-fluid">
        <h1 className="titlebar">Dashboard</h1>
        {/* row 1 starts */}
        <div className="row" >
          <div className="col-4" >
            <div className="boxa">
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
            </div>
          </div>
          <div className="col-4" >
          <div className="boxa">
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
            </div>
          </div>
          <div className="col-4" >
          <div className="boxa">
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
              <h1>this is the box a</h1>
            </div>
          </div>
        </div>
        {/* row 1 ends */}

        <div className="row">
          <div className="col-12" >
            <div className="boxa">
            <p>Yahooo! we are rocking and rolling man yes </p>
            <p>Yahooo! we are rocking and rolling man yes </p>
            <p>Yahooo! we are rocking and rolling man yes </p>
            </div>
          </div>
        </div>

        {/* row 2 starts */}
        {/* row 2 ends */}
      </Container>
    </>
  );
};

export default memo(HomePage);

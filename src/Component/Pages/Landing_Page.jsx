import React from "react";
import StatesComponent from "../Helpers/States";
import Resources from "../Helpers/Resources";
import { Pagination } from "../Helpers/Pagination";
import Header from "../Helpers/Header";

const Landing = () => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9 overflow-auto">
          <StatesComponent />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <Resources />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Landing;

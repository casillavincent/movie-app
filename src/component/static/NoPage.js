import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
   return (
      <div className="wrapper">
         <div className="page-not-found">
            <img src="/assets/logo.svg" alt="ButterDB Logo" width="150" />
            <h1>404</h1>
            <p>Looks like this page doesnt exist!</p>
            <Link to={"/popular"}> Take Me Back</Link>
         </div>
      </div>
   );
};

export default NoPage;

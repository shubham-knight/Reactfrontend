/* eslint-disable react/jsx-no-undef */
import React from "react";

function Home() {

  return(
      <div className="container-fluid homecont">
       <div className="row">
         <div className="col-md-6 homename">
           <h1>Web Design </h1>
           <h1>Web Development</h1>
           <h1>by SB</h1>
           <p>Our product are fully custom-made built with the latest technologies and cloud-architectures.</p>
           <p align="right">
           <input type="button" className="btn btn-light homebtn" value="Get Started >>"/>
           </p>
         </div>
         <div className="col-md-6"></div>
       </div>
      </div>
      
  );
};

export default Home;
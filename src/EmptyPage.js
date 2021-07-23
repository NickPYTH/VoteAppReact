import React, { useContext, useState, useEffect } from "react";
import build from "./build2.gif"

function EmptyPage(props) {
 
    return (
      <div className="container mt-3">
        <div className="row">
            <div className="w-100 text-center h3 mt-3">Страница в разработке</div>
            <div class="col-12 text-center">
            <img src={build} />
            </div>
            
          </div>
        </div>
    );

}

export default EmptyPage;

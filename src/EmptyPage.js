import React from "react";
import build from "./build2.gif";

function EmptyPage() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="w-100 text-center h3 mt-3">Страница в разработке</div>
        <div className="col-12 col-lg-8 offset-lg-2 text-center">
          <img className="w-100" src={build} alt='img' />
        </div>
      </div>
    </div>
  );
}

export default EmptyPage;

import React from "react";
import "./Load.css"

const Load = () => {
  return (
    <div id="cube-loader">
      <div className="caption">
        <div className="cube-loader">
          <div className="cube loader-1"></div>
          <div className="cube loader-2"></div>
          <div className="cube loader-4"></div>
          <div className="cube loader-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Load;
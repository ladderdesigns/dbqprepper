import React from "react";
import PropTypes from "prop-types";
import "../css/input.css";

import PDFViewer from 'pdf-viewer-reactjs'

function Input({ link }) {
  return (
    <div>
      <div className="h-auto pb-8 mx-2 text-center wrapper">
       <PDFViewer hideNavbar={false} page={7} loader={false} hideRotation hideZoom
            document={{
                url: link ,
            }}
        />
      </div>
      <textarea className="w-64 h-64 p-6 rounded-lg md:w-full"></textarea>
    </div>
  );
}

Input.propTypes = {
    link: PropTypes.string,
    
};

Input.defaultProps = {};

export default Input;

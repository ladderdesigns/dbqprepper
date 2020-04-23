import React from "react";
import PropTypes from "prop-types";

import PDFViewer from 'pdf-viewer-reactjs'


function Input({ link }) {
  return (
    <div>
      <div className="text-center">
       <PDFViewer css={"height: auto"} hideNavbar={true} page={7}
            document={{
                url: link ,
            }}
        />
      </div>
      <textarea className="w-full h-64 p-6 rounded-lg"></textarea>
    </div>
  );
}

Input.propTypes = {
    link: PropTypes.string,
    
};

Input.defaultProps = {};

export default Input;

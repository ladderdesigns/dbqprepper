import React from "react";
import PropTypes from "prop-types";
import { Document, Page } from 'react-pdf'

function Input({ url }) {
  return (
    <div>
      <div className="mb-2 text-center">
      <Document file={url}><Page pageNumber={7}/> <Page pageNumber={8}/> <Page pageNumber={9}/> <Page pageNumber={10}/> </Document>
      </div>

      <textarea className="w-full h-64 p-6 rounded-lg"></textarea>
    </div>
  );
}

Input.propTypes = {
  url: PropTypes.string,
};

Input.defaultProps = {};

export default Input;

import React, {  } from "react";
import PropTypes from "prop-types";
import Timer from "react-compound-timer";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../css/input.css";

function InputArea({ link }) {
  
  return (
    <div className="flex flex-col w-full h-full pb-8 mx-2 ">
      <div className="mb-4 font-semibold">
         <Timer initialTime={3015000} direction="backward">
          {() => (
            <React.Fragment>
               <Timer.Minutes /> minutes <Timer.Seconds />{" "}
              seconds{" "}
            </React.Fragment>
          )}
        </Timer>
      </div>

      <embed className="h-screen mb-10 w-100" height src={link}></embed>
      <div className="w-full h-64 overflow-scroll">
      <Editor
        editorStyle={{"background-color": "white", "margin-top": "1rem", "padding-top": "0rem !important", "padding-bot": "0rem", "padding-left": "1rem", "padding-right": "1rem"}}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        
      />
      </div>
      
    </div>
  );
}

InputArea.propTypes = {
  link: PropTypes.string,
};

InputArea.defaultProps = {};

export default InputArea;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Timer from "react-compound-timer";


import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "../css/input.css";

let Editor = () => <></>;

function InputArea({ link }) {
  const [editorState, setEditorState] = useState();
  useEffect(() => {
    Editor = require("react-draft-wysiwyg").Editor;
    setEditorState(true)
  },[]);
  return (
    <div className="flex flex-col w-full h-full pb-8 mx-2 ">
      

      <embed className="h-screen mb-4 w-100" height src={link}></embed>
      <div className="mb-4 font-semibold">
         <Timer initialTime={3000000} direction="backward">
          {() => (
            <React.Fragment>
              <Timer.Minutes /> minutes <Timer.Seconds />{" "}
              seconds{" "}
            </React.Fragment>
          )}
        </Timer>
      </div>
      <div className="w-full h-64 overflow-scroll min-h-64">
      {editorState &&
      <Editor
        editorStyle={{"background-color": "white", "margin-top": "1rem", "padding-top": "0rem !important", "padding-bot": "0rem", "padding-left": "1rem", "padding-right": "1rem"}}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        
      />
}
      </div>
      
    </div>
  );
}

InputArea.propTypes = {
  link: PropTypes.string,
};

InputArea.defaultProps = {};

export default InputArea;

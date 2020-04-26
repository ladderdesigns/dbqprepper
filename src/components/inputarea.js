import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Timer from "react-compound-timer";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

let Editor = () => <></>;

function InputArea({ link }) {
  
  const [editorState, setEditorState] = useState();
  const [editorInput, setEditorInput] = useState();
  
  function getEditorInput() {
    if (editorInput != null) {
      console.log(editorInput.blocks[0].text)
    }
  }

  function download(text, name, type) {
    var a = document.getElementById("downloadEditor");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
  }

  function checkMobile() {
    if (window.screen.width < 600) {
      return true
    }
    return false
  }

  useEffect(() => {
    Editor = require("react-draft-wysiwyg").Editor;
    setEditorState(true);

  }, []);

  return (
    <div className="flex flex-col w-full h-full mx-2 sm:pb-8 ">
      <embed className="h-screen mb-4 " height src={link}></embed>
      <div className="mb-4 font-semibold">
        <Timer initialTime={3010000} direction="backward">
          {() => (
            <React.Fragment>
              <Timer.Minutes /> minutes <Timer.Seconds /> seconds{" "}
            </React.Fragment>
          )}
        </Timer>
      </div>
      <div className="w-full h-64 overflow-hidden min-h-64">
        {editorState && (
          <Editor
          
          toolbarHidden={checkMobile()}
            editorStyle={{
              "background-color": "white",
              "margin-top": "1.25rem",
              "padding-top": "0rem",
              "padding-bot": "0rem",
              "padding-left": "1rem",
              "padding-right": "1rem",
              "height": "10rem",
              "overflow": "scroll",
              "min-height": "200px"
            }}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onContentStateChange={setEditorInput}
            onChange={() => getEditorInput()}
          />
        )}
      </div>
      <div className="flex self-center pt-4 sm:self-end">
        <button  className="w-auto px-4 py-2 mb-4 text-sm font-bold leading-tight text-white bg-black border border-gray-400 rounded-full shadow appearance-none md:px-6 md:text-md hover:border-gray-500 focus:outline-none focus:shadow-outline" onClick={() => download(editorInput.blocks[0].text, 'dbqprepper.txt', 'text/plain')}>
        <a  id="downloadEditor">
          Download Response
          </a>
        </button>
      

      </div>
    </div>
  );
}

InputArea.propTypes = {
  link: PropTypes.string,
};

InputArea.defaultProps = {};

export default InputArea;

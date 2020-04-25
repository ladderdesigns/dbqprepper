import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Timer from "react-compound-timer";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "../css/input.css";

let Editor = () => <></>;

function InputArea({ link }) {
  const [editorState, setEditorState] = useState();
  const [editorInput, setEditorInput] = useState();

  useEffect(() => {
    Editor = require("react-draft-wysiwyg").Editor;
    setEditorState(true);

  }, []);
  return (
    <div className="flex flex-col w-full h-full pb-8 mx-2 ">
      <embed className="h-screen mb-4 w-100" height src={link}></embed>
      <div className="mb-4 font-semibold">
        <Timer initialTime={3000000} direction="backward">
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
            editorStyle={{
              "background-color": "white",
              "margin-top": "1.25rem",
              "padding-top": "0rem !important",
              "padding-bot": "0rem",
              "padding-left": "1rem",
              "padding-right": "1rem",
              "height": "10.5rem",
              "overflow": "scroll",
            }}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onContentStateChange={setEditorInput}
            onChange={() => console.log(editorInput)}
          />
        )}
      </div>
      <div className="flex self-end pt-4">
        <button className="w-48 px-4 py-2 mb-4 text-sm font-bold leading-tight text-white bg-black border border-gray-400 rounded-full shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline">
          Generate Prompt
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

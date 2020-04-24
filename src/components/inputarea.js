import React from "react";
import PropTypes from "prop-types";
import Timer from "react-compound-timer";
import "../css/input.css";

function InputArea({ link }) {
  return (
    <div className="flex flex-col w-full h-full pb-8 mx-2 ">
      <div className="mb-4 font-semibold">
        <Timer initialTime={3010000} direction="backward">
          {() => (
            <React.Fragment>
              <Timer.Hours /> hours <Timer.Minutes /> minutes <Timer.Seconds />{" "}
              seconds{" "}
            </React.Fragment>
          )}
        </Timer>
      </div>

      <embed className="h-screen mb-10 w-100" height src={link}></embed>

      <textarea className="h-64 p-6 rounded-lg md:w-full"></textarea>
    </div>
  );
}

InputArea.propTypes = {
  link: PropTypes.string,
};

InputArea.defaultProps = {};

export default InputArea;

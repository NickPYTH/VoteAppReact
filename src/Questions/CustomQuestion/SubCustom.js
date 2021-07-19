import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Context from "../../context";

const styles = {};

function SubCustom(props) {
  const { removeSubs } = useContext(Context);
  let count = 0;

  return (
    <div>
      {props.answers.map((currentValue) => {
        count += 1;
        return (
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                style={{ width: 14 + "rem" }}
                className="input-group-text d-lg-flex d-none"
              >
                {count} ответ
              </span>
              <span className="input-group-text d-lg-none d-flex">
                {count} ответ
              </span>
            </div>
            <div
              name={currentValue.key}
              style={{ overflowX: "" }}
              className="form-control"
            >
              {currentValue.value}
            </div>
            <button
              className="btn btn-outline-danger ml-2"
              onClick={removeSubs.bind(
                null,
                currentValue.key,
                props.index,
                currentValue.value
              )}
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default SubCustom;

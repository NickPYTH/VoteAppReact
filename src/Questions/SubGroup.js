import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {};

function SubGroup(props) {
    const { removeChild } = useContext(Context);
    let count = 0;
    return (
        <div>
            {props.answers.map((currentValue) => {
                count += 1;
                return (
                    <div className="input-group mb-3">
                        <input placeholder="Имя группы" type="text" className="form-control"></input>
                        <button
                            className="btn btn-outline-danger ml-2"
                            onClick={removeSubs.bind(null, currentValue.key)}
                        >
                            x
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default SubGroup;


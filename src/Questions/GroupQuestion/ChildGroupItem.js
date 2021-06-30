import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Context from "../../context";

const styles = {};

function ChildGroupItem(props) {
    const { removeChild } = useContext(Context);
    let count = 0;
    return (
        <div>
            {props.answers.map((currentValue) => {
                count += 1;
                return (
                    <div className="d-flex mb-2">
                            <div className="input-group w-100">
                                <div
                                    name={currentValue.key}
                                    className="form-control"
                                >
                                    {currentValue.value}
                                </div>
                                <button
                                    className="btn btn-outline-danger ml-2"
                                    onClick={removeChild.bind(
                                        null,
                                        currentValue.key
                                    )}
                                >
                                    x
                                </button>
                            </div>

                    </div>
                );
            })}
        </div>
    );
}

export default ChildGroupItem;


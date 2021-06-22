import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {

};

function SubCustom(props) {
    const { removeSubs } = useContext(Context);
    let count = 0
    return (
        <div>
            {props.answers.map((currentValue) => {
                count += 1
                        return (
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                <span style={{ width: 14 + "rem" }} className="input-group-text">
                                    { count } ответ
                                </span>
                                </div>
                                <input type="text" className="form-control"></input>
                                <button 
                                    className="btn btn-outline-danger ml-2"   
                                    onClick={removeSubs.bind(null, currentValue.key)}
                                >x</button>
                            </div>  
                        )
                    })}
        </div>
  );
}

export default SubCustom;


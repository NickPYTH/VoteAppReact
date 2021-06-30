import React, { useContext, useState } from "react";
import PropTypes, { func } from "prop-types";
import Context from "../../context";
import ChildGroupItem from "./ChildGroupItem";

const styles = {};

function ChildGroup(props) {
    const index = props.index;
    const { removeSubs } = useContext(Context);
    const [customAnswers, setCustomAnswers] = React.useState([]);
    const [customAnswersEnter, setCustomAnswersEnter] = React.useState(new Map());
    const { addChild } = useContext(Context);

    function prepareSetCustomAnswersEnter(e, currentKey) {
        if (typeof(customAnswersEnter) == "string"){
            var tmp = new Map();
            tmp.set(currentKey, e.value)
            setCustomAnswersEnter(tmp);
        }
        else{
            customAnswersEnter.set(currentKey, e.value);
            setCustomAnswersEnter(customAnswersEnter);
        } 
    }

    function removeChild(key) {
        var tmp = [];
        customAnswers.map((item) => {
            if (item.key != key) {
                tmp = tmp.concat({
                    ques_index: item.ques_index,
                    key: item.key,
                    value: item.value,
                });
            }
        });
        setCustomAnswers(tmp);
    }

    let count = 0;
    return (
        <Context.Provider value={{ removeChild }}>
            <div>
                {props.groups.map((currentValue) => {
                    count += 1;
                    return (
                        <div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="input-group mb-3">
                                        <input
                                            placeholder="Имя группы"
                                            type="text"
                                            className="form-control"
                                        ></input>
                                    </div>
                                </div>

                                <div className="col-6 offset">
                                    {currentValue.childs.map((child) => {
                                        return (
                                            <div key={currentValue.key}>
                                                {child.value}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="d-flex justify-content-center">
                                <div className="input-group">
                                    <input
                                        name={currentValue.key}
                                        placeholder="Введите дочерний элемент"
                                        type="date"
                                        className="form-control mr-2"
                                        
                                        onChange={(e) =>
                                            prepareSetCustomAnswersEnter(
                                                e.target,
                                                currentValue.key
                                            )
                                        }
                                    ></input>
                                
                                    <button
                                        className="btn btn-outline-secondary"
                                        onClick={() => {
                                            addChild(
                                                currentValue.key,
                                                customAnswersEnter
                                            );
                                            setCustomAnswersEnter("");
                                        }}
                                        type="submit"
                                    >
                                        Добавить дочерний элемент
                                    </button>
                                </div>
                            </div>
                            <button
                                className="btn btn-outline-danger mt-3 mb-3"
                                onClick={removeSubs.bind(
                                    null,
                                    currentValue.key
                                )}
                            >
                                Удалить группу
                            </button>
                        </div>
                    );
                })}
            </div>
        </Context.Provider>
    );
}

export default ChildGroup;


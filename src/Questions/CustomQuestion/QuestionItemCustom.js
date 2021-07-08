import React, { useContext, useState } from "react";
import PropTypes, { func } from "prop-types";
import Context from "../../context";
import SubCustom from "./SubCustom";

const styles = {};

function TodoItem({ todo, index, onChange}) {
    const { removeTodo } = useContext(Context);
    const [customAnswers, setCustomAnswers] = React.useState([]);
    const [customAnswersEnter, setCustomAnswersEnter] = React.useState("");

    function removeSubs(key, id, value) {
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
        onChange("custom", id, value, true)
    }

    function addValue(key, val) {
        customAnswers.map((item) => {
            if (item.key == key) {
                item.value = val;
            }
        });
        console.log("customAnswers")
    }

    function addAnsToData(id, value){
        onChange("custom", id, value)
    }

    function getCurrentValue(key) {
        customAnswers.map((item) => {
            if (item.key == key) {
                return item.value;
            }
        });
        return 1;
    }

    return (
        <Context.Provider value={{ removeSubs, addValue, getCurrentValue }}>
            <div>
                <div id={index + 1} className="card mb-3">
                    <div className="card-body">
                        <div className="mb-2 d-flex justify-content-between">
                            <span className="badge badge-primary">
                                Свои ответы
                            </span>
                            <span className="badge badge-primary">
                                Номер вопроса: {index + 1}
                            </span>
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={removeTodo.bind(null, todo.id)}
                                className="badge badge-danger"
                            >
                                Удалить
                            </span>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span
                                    style={{ width: 14 + "rem" }}
                                    className="input-group-text"
                                >
                                    Заголовок вопроса
                                </span>
                            </div>
                            <input required={true} type="text" className="form-control"></input>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span
                                    style={{ width: 14 + "rem" }}
                                    className="input-group-text"
                                >
                                    Описание вопроса
                                </span>
                            </div>
                            <input required={true} type="text" className="form-control"></input>
                        </div>
                        <SubCustom index={index} answers={customAnswers} />

                        <div className="input-group">
                            <input
                                placeholder="Введите ответ"
                                type="text"
                                className="form-control mr-2"
                                value={customAnswersEnter}
                                onChange={e => setCustomAnswersEnter(e.target.value)}
                            ></input>
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() =>{
                                  setCustomAnswers(
                                    customAnswers.concat({
                                        ques_index: index + 1,
                                        key: Math.random(),
                                        value: customAnswersEnter,
                                    })
                                )
                                addAnsToData(index, customAnswersEnter)
                                setCustomAnswersEnter("");
                                  }
                                }
                                
                            >
                                Добавить ответ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Context.Provider>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
};

export default TodoItem;


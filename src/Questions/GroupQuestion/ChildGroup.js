import React, { useContext, useState } from "react";
import PropTypes, { func } from "prop-types";
import Context from "../../context";
import QuestionList from "./ChildGroupItem.js";

const styles = {};

function ChildGroup(props) {
    const { removeGroup } = useContext(Context);
    const [title, setTitle] = React.useState(new Map());
    const { changeTitle } = useContext(Context);

    function prepareSetTitle(e, currentKey) {
        if (typeof title == "string") {
            var tmp = new Map();
            tmp.set(currentKey, e.value);
            setTitle(tmp);
        } else {
            title.set(currentKey, e.value);
            setTitle(title);
        }
    }

    const [todos, setTodos] = React.useState([]);

    function removeTodo(group_id, child_id) {
        var tmp = [];
        todos.map((value) => {
            if (child_id != value.child_id){
                tmp.push(value)
            }
        });
        setTodos(tmp);
    }
    function addTodo(group_id) {
        setTodos(
            todos.concat([
                {
                    ques_index: props.index,
                    group_id: group_id,
                    child_id: Math.random(),
                    value: "",
                },
            ])
        );
    }
    function changeTodo(e, group_id, child_id) {
        var tmp = todos;
        tmp.map((value) => {
            if (child_id == value.child_id){
                value.value = e.target.value
            }
        });
        setTodos(tmp);
    }


    return (
        <Context.Provider value={{ addTodo, removeTodo, changeTodo }}>
            <div>
                {props.groups.map((currentValue) => {
                    return (
                        <div>
                            <div className="row">
                                <div className="col-12 justify-content-center">
                                    <div className="input-group mb-3">
                                        <input
                                            key={currentValue.key}
                                            placeholder="Имя группы"
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => {
                                                changeTitle(
                                                    e.target,
                                                    currentValue.key
                                                );
                                                prepareSetTitle(
                                                    e,
                                                    currentValue.key
                                                );
                                            }}
                                            value={title.get(currentValue.key)}
                                        ></input>
                                    </div>
                                </div>

                                <QuestionList
                                    group_id={currentValue.key}
                                    todos={todos}
                                    onCreate={addTodo}
                                    onRemove={removeTodo}
                                />
                            </div>

                            <button
                                className="btn btn-outline-danger mt-3 mb-3"
                                onClick={removeGroup.bind(
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


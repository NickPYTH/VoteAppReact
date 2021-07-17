import React, { useContext, useState } from "react";
import PropTypes, { func } from "prop-types";
import Context from "../../context";
import QuestionList from "./ChildGroupItem.js";

const styles = {};

function ChildGroup(props) {
    const { removeGroup, changeGroupChild, removeGroupChild, addGroupChild } = useContext(Context);
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
        var counter = 0;
        todos.map((value) => {
            if (value.group_id == group_id){
                counter += 1
            }
        })
        if (counter > 1){
            todos.map((value) => {
                if (child_id != value.child_id){
                    tmp.push(value)
                }
            });
            setTodos(tmp);
            removeGroupChild(tmp, child_id)
        }
            
    }
    function addTodo(group_id) {
        var child = {
            ques_index: props.index,
            group_id: group_id,
            group_name: title.get(group_id),
            child_id: Math.random(),
            value: "",
        };
        setTodos(
            todos.concat([
                child
            ])
        );

        addGroupChild(child)
        
    }
    function changeTodo(e, group_id, child_id) {
        var tmp = todos;
        tmp.map((value) => {
            if (child_id == value.child_id){
                value.value = e.target.value
            }
        });
        setTodos(tmp);

        changeGroupChild(tmp);
        
    }


    return (
        <Context.Provider value={{ removeTodo, changeTodo }}>
            <div>
                {props.groups.map((currentValue) => {
                    var title_tmp = title.get(currentValue.key)
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
                                                    e.target,
                                                    currentValue.key
                                                );
                                            }}
                                            defaultValue={title_tmp}
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
                                    currentValue.key,
                                    todos
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


import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Context from "../../context";
import ChildGroup from "./ChildGroup";

const styles = {};

function TodoItem({ todo, index }) {
    const { removeTodo } = useContext(Context);
    const classes = [];
    const [groups, setGroups] = React.useState([]);
    

    if (todo.completed) {
        classes.push("done");
    }

    function removeSubs(key) {
        if (groups.length != 1){
            setGroups(
                groups.filter((groups) => groups.key !== key)
            );
        }
        
    }

    function addChild(group_key, value) {
        var tmp_groups = groups
        tmp_groups.map(
            (group)=>{
                if (group.key === group_key){
                    group.childs.push({
                        key: Math.random(),
                        value: value,
                        group_key: group_key,
                    })
                }
            }
        )
        setGroups(tmp_groups)
    }



    return (
        <Context.Provider value={{ removeSubs, addChild }}>
            <div>
                <div id={index + 1} className="card mb-3">
                    <div className="card-body">
                        <div className="mb-2 d-flex justify-content-between">
                            <span className="badge badge-primary">
                                Групповые ответы
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
                            <input type="text" className="form-control"></input>
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
                            <input type="text" className="form-control"></input>
                        </div>
                        <ChildGroup groups={groups} />
                        <div className="d-flex justify-content-lg-start">
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() =>{
                                    setGroups(
                                        groups.concat({
                                            ques_index: index + 1,
                                            key: Math.random(),
                                            childs: [],
                                        })
                                    )
                            
                                }
                            }
                                type="submit"
                            >
                                Добавить группу
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


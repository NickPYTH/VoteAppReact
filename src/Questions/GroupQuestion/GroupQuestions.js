import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Context from "../../context";
import ChildGroup from "./ChildGroup";

const styles = {};

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context);
    const { changeGroupChild, removeGroupChild } = useContext(Context);
    const [groups, setGroups] = React.useState([]);
    
    function removeGroup(key, childArray) {  // todo fix 
        if (groups.length != 1){
            var tmp = new Array()
            groups.map((group)=>{
                if (group.key != key){
                    tmp.push(group)
                }
            })
            setGroups([]);
            setGroups(tmp);
            onChange("groups", index, tmp, null)
            changeGroupChild(childArray)
        }
        
    }

    function addChild(group_key, value) {
        var tmp_groups = groups
        if (typeof(value) == "object"){
           if (value.get(group_key) !== ""){
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
            onChange("groups", index, tmp_groups, null)
            } 
        }     
    }

    function changeTitle(value, group_key) {
        var tmp_groups = groups
        tmp_groups.map(
            (group)=>{
                if (group.key === group_key){
                    group.title = value.value
                }   
            }
        )
        setGroups(tmp_groups)
        onChange("groups", index, tmp_groups, null)
    }

    function removeChild(group_key, child_key) {
        var tmp_groups = groups
        tmp_groups.map(
            (group)=>{
                if (group.key === group_key){
                    var tmp_childs = []
                    group.childs.map(
                        (child)=>{
                            if (child.key != child_key){
                                tmp_childs.push(child)
                            }
                        }
                    )
                    group.childs = tmp_childs
                }   
            }
        )
        setGroups(tmp_groups)
        onChange("groups", index, tmp_groups, null)
    }



    return (
        <Context.Provider value={{ removeGroup, addChild, removeChild, changeTitle, onChange, changeGroupChild, removeGroupChild }}>
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
                        <ChildGroup groups={groups} index={index + 1}/>
                        <div className="d-flex justify-content-lg-start">
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() =>{
                                    setGroups(
                                        groups.concat({
                                            ques_index: index + 1,
                                            key: Math.random(),
                                            childs: new Map(),
                                            title: "",
                                        })
                                    )
                            
                                }
                            }
                                
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


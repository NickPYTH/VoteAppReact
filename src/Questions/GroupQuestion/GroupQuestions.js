import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Context from "../../context";
import ChildGroup from "./ChildGroup";
import Switch from "@material-ui/core/Switch";


function TodoItem({ todo, index, onChange }) {
  const [isComment, setIsComment] = useState(false);
  const { removeTodo } = useContext(Context);
  const {
    changeGroupChild,
    removeGroupChild,
    addGroupChild,
    switchCommentInGroupQuestion,
  } = useContext(Context);
  const [groups, setGroups] = React.useState([]);
  const { changeQuestionTitle } = useContext(Context);
  const { changeQuestionDescription } = useContext(Context);
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");

  function removeChild(group_key, child_key) {
    let tmp_groups = groups;
    tmp_groups.map((group) => {
      if (group.key === group_key) {
        let tmp_childs = [];
        group.childs.map((child) => {
          if (child.key !== child_key) {
            tmp_childs.push(child);
          }
        });
        group.childs = tmp_childs;
      }
    });
    setGroups(tmp_groups);
    onChange("groups", index, tmp_groups, null);
  }

  return (
    <Context.Provider
      value={{
        removeChild,
        onChange,
        addGroupChild,
        changeGroupChild,
        removeGroupChild,
      }}
    >
      <div>
        <div id={index + 1} className="card mb-3">
          <div className="card-body">
            <div className="mb-2 d-flex justify-content-between">
              <span className="badge badge-primary">Групповые ответы</span>
              <span className="badge badge-primary d-none d-lg-flex">
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
              <div className="input-group-prepend d-none d-lg-flex">
                <span
                  style={{ width: 14 + "rem" }}
                  className="input-group-text"
                >
                  Заголовок вопроса
                </span>
              </div>
              <div className="input-group-prepend d-lg-none d-flex w-100 mb-1">
                <div className="input-group-text w-100">Заголовок вопроса</div>
              </div>
              <input
                required={true}
                type="text"
                className="form-control"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                  changeQuestionTitle(index, e.target.value);
                }}
                defaultValue={questionTitle}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend d-none d-lg-flex">
                <span
                  style={{ width: 14 + "rem" }}
                  className="input-group-text"
                >
                  Описание вопроса
                </span>
              </div>
              <div className="input-group-prepend d-lg-none d-flex w-100 mb-1">
                <div className="input-group-text w-100">Описание вопроса</div>
              </div>
              <input
                required={true}
                type="text"
                className="form-control"
                onChange={(e) => {
                  setQuestionDescription(e.target.value);
                  changeQuestionDescription(index, e.target.value);
                }}
                defaultValue={questionDescription}
              />
            </div>
            <ChildGroup groups={groups} index={index + 1} />
            <div className="d-flex justify-content-lg-start justify-content-center">
              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  setGroups(
                    groups.concat({
                      ques_index: index + 1,
                      key: Math.random(),
                      childs: new Map(),
                      title: "",
                    })
                  );
                }}
              >
                Добавить группу
              </button>
            </div>
            <div className="input-group-prepend mt-3 w-100">
              <div
                style={{ width: 14 + "rem" }}
                className="input-group-text rounded-left"
              >
                Коментарий к ответу
              </div>
              <Switch
                name="checkedB"
                color="primary"
                onChange={() => {
                  setIsComment(!isComment);
                  switchCommentInGroupQuestion(index, !isComment);
                }}
              />
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

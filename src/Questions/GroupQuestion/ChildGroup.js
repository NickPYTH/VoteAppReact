import React, { useContext } from "react";
import Context from "../../context";
import QuestionList from "./ChildGroupItem.js";

function ChildGroup(props) {
  const { removeGroup, removeGroupChild, addGroupChild } =
    useContext(Context);
  const [title, setTitle] = React.useState(new Map());
  const { changeTitle } = useContext(Context);

  function prepareSetTitle(e, currentKey) {
    if (typeof title === "string") {
      let tmp = new Map();
      tmp.set(currentKey, e.value);
      setTitle(tmp);
    } else {
      title.set(currentKey, e.value);
      setTitle(title);
    }
  }

  const [questionsList, setQuestionsList] = React.useState([]);

  function removeTodo(group_id, child_id) {
    let tmp = [];
    let counter = 0;
    questionsList.map((value) => {
      if (value.group_id === group_id) {
        counter += 1;
      }
    });
    if (counter > 1) {
      questionsList.map((value) => {
        if (child_id !== value.child_id) {
          tmp.push(value);
        }
      });
      setQuestionsList(tmp);
      removeGroupChild(tmp, child_id);
    }
  }
  function addTodo(group_id) {
    let child = {
      ques_index: props.index,
      group_id: group_id,
      group_name: title.get(group_id),
      child_id: Math.random(),
      value: "",
    };
    setQuestionsList(questionsList.concat([child]));

    addGroupChild(child);
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div>
        {props.groups.map((currentValue) => {
          let title_tmp = title.get(currentValue.key);
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
                        changeTitle(e.target, currentValue.key);
                        prepareSetTitle(e.target, currentValue.key);
                      }}
                      defaultValue={title_tmp}
                    />
                  </div>
                </div>

                <QuestionList
                  group_id={currentValue.key}
                  questionsList={questionsList}
                  onCreate={addTodo}
                  onRemove={removeTodo}
                />
              </div>

              <button
                className="btn btn-outline-danger mt-3 mb-3"
                onClick={removeGroup.bind(
                  null,
                  currentValue.key,
                  questionsList
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

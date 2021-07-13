import React, { useContext, useState } from "react";
import PropTypes, { func } from "prop-types";
import Context from "../../context";
import SubCustom from "./SubCustom";
import Switch from "@material-ui/core/Switch";

const styles = {};

function TodoItem({ todo, index, onChange }) {
  const [isComment, setIsComment] = useState(false)
  const { removeTodo } = useContext(Context)
  const [customAnswers, setCustomAnswers] = React.useState([])
  const [customAnswersEnter, setCustomAnswersEnter] = React.useState("")
  const { changeQuestionTitle } = useContext(Context)
  const { changeQuestionDescription } = useContext(Context)
  const [questionTitle, setQuestionTitle] = useState("")
  const [questionDescription, setQuestionDescription] = useState("")

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
    onChange("custom", id, value, true);
  }

  function addValue(key, val) {
    customAnswers.map((item) => {
      if (item.key == key) {
        item.value = val;
      }
    });
  }

  function addAnsToData(id, value) {
    onChange("custom", id, value);
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
              <span className="badge badge-primary">Свои ответы</span>
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
              <div className="input-group-prepend d-lg-flex d-none">
                <span
                  style={{ width: 14 + "rem" }}
                  className="input-group-text"
                >
                  Заголовок вопроса
                </span>
              </div>
              <div className="input-group-prepend w-100 d-lg-none d-flex mb-1">
                <div className="input-group-text w-100">Заголовок вопроса</div>
              </div>

              <input
                required={true}
                type="text"
                className="form-control"
                onChange={(e)=>{
                  setQuestionTitle(e.target.value)
                  changeQuestionTitle(index, e.target.value)
              }}
              defaultValue={questionTitle}
              ></input>
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
              <div className="input-group-prepend w-100 d-lg-none d-flex mb-1">
                <div className="input-group-text w-100">Описание вопроса</div>
              </div>
              <input
                required={true}
                type="text"
                className="form-control"
                onChange={(e)=>{
                  setQuestionDescription(e.target.value)
                  changeQuestionDescription(index, e.target.value)
              }}
              defaultValue={questionDescription}
              ></input>
            </div>
            <SubCustom index={index} answers={customAnswers} />

            <div className="input-group text-center text-lg-center">
                <div className="col-12 col-lg-9 mb-1">
                  <input
                    placeholder="Введите ответ"
                    type="text"
                    className="form-control"
                    value={customAnswersEnter}
                    onChange={(e) => setCustomAnswersEnter(e.target.value)}
                  ></input>
                </div>
                <div className="col-12 col-lg-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      setCustomAnswers(
                        customAnswers.concat({
                          ques_index: index + 1,
                          key: Math.random(),
                          value: customAnswersEnter,
                        })
                      );
                      addAnsToData(index, customAnswersEnter);
                      setCustomAnswersEnter("");
                    }}
                  >
                    Добавить ответ
                  </button>
                  
                </div>
                <div className="input-group-prepend mt-3 w-100">
              <div style={{ width: 14 + "rem" }} className="input-group-text rounded-left">
                Коментарий к ответу
              </div>
              <Switch
                      name="checkedB"
                      color="primary"
                      onChange={() => {
                        setIsComment(isComment ? false : true)
                        addAnsToData(index, isComment ? false : true)
                      }}
                    />
            </div>
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


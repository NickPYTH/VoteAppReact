import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Context from "../context";
import SubCustom from "./SubCustom";

const styles = {};

function TodoItem({ todo, index, answers, onChange, onCreate }) {
  const { removeTodo } = useContext(Context);
  const classes = [];
  const [customAnswers, setCustomAnswers] = React.useState([]);
  const [count, setCount] = useState(0);

  if (todo.completed) {
    classes.push("done");
  }

  function removeSubs(key) {
    setCustomAnswers(customAnswers.filter(customAnswers => customAnswers.key !== key))
  }

  return (
    <Context.Provider value={{ removeSubs }}>
    <div>
      <div id={index + 1} className="card mb-3">
        <div className="card-body">
          <div className="mb-2 d-flex justify-content-between">
            <span className="badge badge-primary">Свои ответы</span>
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
              <span style={{ width: 14 + "rem" }} className="input-group-text">
                Заголовок вопроса
              </span>
            </div>
            <input type="text" className="form-control"></input>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span style={{ width: 14 + "rem" }} className="input-group-text">
                Описание вопроса
              </span>
            </div>
            <input type="text" className="form-control"></input>
          </div>
          <SubCustom answers={customAnswers} />
          <div className="d-flex justify-content-lg-start">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setCustomAnswers(customAnswers.concat({ques_index: index + 1, key: Math.random()}))}
              type="submit">
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


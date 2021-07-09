import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../../context";

const styles = {

};

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  onChange("numbers", index)

  return (
    <div>
      <div id={index + 1} className="card mb-3">
        <div className="card-body">
        <div className="mb-2 d-flex justify-content-between">
          <span className="badge badge-primary d-none d-lg-flex">Ответы от 1 до 5</span>
          <span className="badge badge-primary">Номер вопроса: {index + 1}</span>
          <span style={{ cursor: "pointer" }} onClick={removeTodo.bind(null, todo.id)} className="badge badge-danger">Удалить</span>
        </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend d-none d-lg-flex">
              <span style={{ width: 14 + "rem" }} className="input-group-text">
                Заголовок вопроса
              </span>
            </div>
            <div className="input-group-prepend d-flex d-lg-none w-100 mb-1">
              <div className="input-group-text w-100">
                Заголовок вопроса
              </div>
            </div>
            <input required={true} type="text" className="form-control"></input>
          </div>
          <div className="input-group mb-3 ">
            <div className="input-group-prepend d-none d-lg-flex">
              <span style={{ width: 14 + "rem" }} className="input-group-text">
                Описание вопроса
              </span>
            </div>
            <div className="input-group-prepend d-flex d-lg-none w-100 mb-1">
              <div className="input-group-text w-100">
              Описание вопроса
              </div>
            </div>
            <input required={true} type="text" className="form-control"></input>
          </div>          
          <div className="input-group justify-content-lg-start justify-content-center">
          <div className="input-group-prepend d-none d-lg-flex">
              <span style={{ width: 14 + "rem" }} className="input-group-text">
                Варианты ответа
              </span>
            </div>
            <div className="input-group-prepend d-flex d-lg-none w-100">
              <div className="input-group-text w-100">
                Варианты ответа
              </div>
            </div>
            <div className="d-flex justify-content-center m-lg-0 m-2">
              <button type="button" className="btn btn-outline-secondary ml-2">1</button>
              <button type="button" className="btn btn-outline-secondary ml-2">2</button>
              <button type="button" className="btn btn-outline-secondary ml-2">3</button>
              <button type="button" className="btn btn-outline-secondary ml-2">4</button>
              <button type="button" className="btn btn-outline-secondary ml-2">5</button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;


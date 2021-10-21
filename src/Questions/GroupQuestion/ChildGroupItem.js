import React, { useContext } from "react";
import Context from "../../context";

function Questions(props) {
  const { removeTodo } = useContext(Context);
  const { changeTodo } = useContext(Context);
  function addTodo(event) {
    event.preventDefault();
    props.onCreate(props.group_id);
  }

  function remove(e, group_id, child_id) {
    removeTodo(group_id, child_id);
  }
  return (
    <div className="col-12">
      <div className="col-12">
        {props.questionsList.map((val) => {
          if (props.group_id === val.group_id) {
            let gen_key = `${Math.floor(Math.random() * 1000)}-min`;
            return (
              <div>
                <div className="input-group mb-2">
                  <input
                    style={{ width: 18 + "px" }}
                    className="form-control font-weight-normal mr-2"
                    key={gen_key}
                    defaultValue={val.value}
                    onChange={(e) => {
                      changeTodo(e, props.group_id, val.child_id);
                    }}
                  />

                  <button
                    onClick={(e) => remove(e, props.group_id, val.child_id)}
                    className="btn btn-outline-danger"
                  >
                    х
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
      <form className="col-lg-6 col-12" onSubmit={addTodo}>
        <button className="btn btn-outline-secondary">
          Добавить дочерний элемент
        </button>
      </form>
    </div>
  );
}

export default Questions;

import React from "react";

function NumberQuestion(props) {
  const [answer, setAnswer] = React.useState();
  if (answer === undefined) {
    props.onChange(props.data.question_name, "5");
  }

  return (
    <div className="card w-100 mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.data.question_name}</h5>
        <p className="card-text">{props.data.question_description}</p>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text">
              Выберите оценку
            </label>
          </div>
          <select
            className="custom-select"
            defaultValue={answer}
            onChange={(e) => {
              setAnswer(e.target.value);
              props.onChange(props.data.question_name, e.target.value);
            }}
          >
            <option selected value="5">
              5
            </option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </div>
        {props.data.question_comment ? (
          <div className="form-group">
            <label>
              Ваш комментарий (необязательно)
            </label>
            <textarea
              onChange={(e) => {
                props.onCommentChange(props.data.question_name, e.target.value);
              }}
              className="form-control"
              rows="3"
            />
          </div>
        ) : (
          <div/>
        )}
      </div>
    </div>
  );
}

export default NumberQuestion;

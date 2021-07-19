import React, { useContext, useState, useEffect } from "react";

function CustomQuestion(props) {
  const [answer, setAnswer] = React.useState();
  if (answer == undefined) {
    props.onChange(props.data.question_name, props.data.answers[0].answer);
  }
  return (
    <div className="card w-100 mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.data.question_name}</h5>
        <p className="card-text">{props.data.question_description}</p>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">
              Выберите ответ
            </label>
          </div>
          <select
            class="custom-select"
            id="inputGroupSelect01"
            onChange={(e) => {
              setAnswer(e.target.value);
              props.onChange(props.data.question_name, e.target.value);
            }}
          >
            {props.data.answers.map((answer) => {
              return <option value={answer.answer}>{answer.answer}</option>;
            })}
          </select>
        </div>
        {props.data.question_comment ? (
          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              Ваш комментарий (необязательно)
            </label>
            <textarea
              onChange={(e) => {
                props.onCommentChange(props.data.question_name, e.target.value);
              }}
              class="form-control"
              rows="3"
            ></textarea>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default CustomQuestion;
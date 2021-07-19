import React, { useContext, useState, useEffect } from "react";

function GroupQuestion(props) {
  const [answer, setAnswer] = React.useState();

  var groups_list = [];
  var items_list = [];

  props.data.answers.map((answer) => {
    if (
      !groups_list.find((i) => {
        if (i.value == answer.group) {
          return true;
        } else {
          return false;
        }
      })
    ) {
      groups_list.push({
        key: Math.random(),
        value: answer.group,
      });
    }
  });
  const [choosenGroup, setChoosenGroup] = React.useState(groups_list[0]);
  props.data.answers.map((answer) => {
    items_list.push(answer);
  });
  var tmp = [];
  items_list.map((item) => {
    if (item.group == items_list[0].group) {
      tmp.push(item.answer);
    }
  });

  if (answer == undefined) {
    props.onChange(props.data.question_name, tmp[0]);
  }

  const [availableItems, setAvailableItems] = React.useState(tmp);

  return (
    <div className="card w-100 mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.data.question_name}</h5>
        <p className="card-text">{props.data.question_description}</p>
        <div class="input-group mb-3 justify-content-between">
          <div className="d-flex mb-2">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">
                Cначала тут
              </label>
            </div>
            <select
              id="select"
              defaultValue={choosenGroup}
              onChange={(e) => {
                var tmp = [];
                setChoosenGroup(e.target.value);
                items_list.map((item) => {
                  if (item.group == e.target.value) {
                    tmp.push(item.answer);
                  }
                });
                setAvailableItems(tmp);
              }}
            >
              {groups_list.map((group) => {
                return <option value={group.value}>{group.value}</option>;
              })}
            </select>
          </div>
          <div className="d-flex mb-2">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">
                А потом тут
              </label>
            </div>
            <select
              id="select"
              onChange={(e) => {
                setAnswer(e.target.value);
                props.onChange(props.data.question_name, e.target.value);
              }}
            >
              {availableItems.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
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

export default GroupQuestion;

import React, { useEffect, useState } from "react";
import QuestionList from "./Questions/QuestionList";
import AddQuestion from "./Questions/AddQuestion";
import Loader from "./Loader";
import Context from "./context";
import {
  ClockIcon,
  KeyIcon,
  NoteIcon,
  PencilIcon,
  SmileyIcon,
} from "@primer/octicons-react";
import Switch from "@material-ui/core/Switch";
import axios from "axios";

const AddTodo = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./Questions/AddQuestion"));
      }, 3000);
    })
);

export default function App() {
  const [formInfo, setFormInfo] = React.useState({
    name: "",
    description: "",
    date: "",
    isInf: false,
    isTryToSend: false,
  });
  const [isInfinity, setIsInfinity] = React.useState(false);
  const [isFindEmpty, setIsFindEmpty] = React.useState(false);
  const [isNoQuestions, setIsNoQuestions] = React.useState(false);
  const [todos, setTodos] = React.useState([]);
  const [countQuestion, setCountQuestion] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  function toggleTodo(
    type,
    id = undefined,
    value = undefined,
    customRemove = undefined
  ) {
    if (type === "numbers") {
      var tmp = todos;
      tmp.map((val) => {
        if (val.questionNumber == id) {
          val.data = [1, 2, 3, 4, 5];
          val.data.isComment = value;
        }
      });
      setTodos(tmp);
    } else if (type === "custom") {
      if (customRemove === undefined) {
        var tmp = todos;
        tmp.map((val) => {
          if (val.questionNumber == id + 1) {
            if (value === true || value === false) {
              val.isComment = value;
            } else {
              val.data.push(value);
            }
          }
        });
        setTodos(tmp);
      } else {
        var tmp = todos;
        tmp.map((val) => {
          if (val.questionNumber == id + 1) {
            val.data = val.data.filter((word) => word != value);
          }
        });
        setTodos(tmp);
      }
    } else if (type === "groups") {
      var tmp = todos;
      tmp.map((val) => {
        if (val.questionNumber == id) {
          if (value === true || value === false) {
            val.isComment = value;
          } else {
            val.data = value;
          }
        }
      });
      setTodos(tmp);
    }
  }

  function changeQuestionTitle(id, title_value) {
    var tmp = todos;
    tmp.map((question) => {
      if (question.questionNumber == id + 1) {
        question.question_title = title_value;
      }
    });
    setTodos(tmp);
  }

  function changeQuestionDescription(id, description_value) {
    var tmp = todos;
    tmp.map((question) => {
      if (question.questionNumber == id + 1) {
        question.question_description = description_value;
      }
    });
    setTodos(tmp);
  }

  function changeQuestionComment(id, status) {
    var tmp = todos;
    tmp.map((question) => {
      if (question.questionNumber == id + 1) {
        question.isComment = status;
      }
    });
    setTodos(tmp);
  }

  function removeTodo(id) {
    setCountQuestion(countQuestion - 1);
    var count = 1;
    setTodos(todos.filter((todo) => todo.id !== id));
    todos.map((el) => {
      if (el.id !== id) {
        el.questionNumber = count;
        count += 1;
      }
    });
  }

  function addTodo(title) {
    var tmp = countQuestion;
    setCountQuestion(countQuestion + 1);
    setTodos(
      todos.concat([
        {
          questionNumber: tmp + 1,
          title: title,
          question_title: "",
          question_description: "",
          id: Date.now(),
          data: [],
          isComment: false,
        },
      ])
    );
  }

  function removeGroupInGroupQuestion(group_id){
    var todos_tmp = todos;
    var tmp = [];
    todos_tmp.map((question)=>{
      if (question.title == "group"){
        question.data.map((answer)=>{
          if (answer.group_id != group_id){
            tmp.push(answer);
          }
        });
      }
      question.data = tmp;
    })
    setTodos(todos_tmp);
  }
  

  function addGroupChild(child){
    var tmp = todos;
    tmp.map((todos_item) => {
      todos_item.data.push(child);
    });
    setTodos(tmp);
  }

  function removeGroupChild(childs, child_id) {
    var tmp = todos;
    var new_items = [];
    tmp.map((todos_item) => {
      todos_item.data.map((data) => {
        if (data.child_id != child_id){
          new_items.push(data)
        }
      });
      todos_item.data = new_items;
      new_items = [];
    });
    setTodos(tmp);
  }


  function changeGroupChild(childs) {
    var tmp = todos;
    tmp.map((todos_item) => {
      todos_item.data.map((data) => {
        
        childs.map((child) => {
          if (data.key == child.group_id) {
            if (!data.childs.has(child.child_id)) {
              data.childs.set(child.child_id, child.value);
            } else {
              data.childs.delete(child.child_id);
              data.childs.set(child.child_id, child.value);
            }
          }
        });
      });
    });
    setTodos(tmp);
  }

  function showData() {
    var axios = require("axios");
    var form = new Map();
    form.set("form_name", formInfo.name);
    form.set("form_description", formInfo.description);
    form.set("questions", todos);
    if (formInfo.isInf) {
      form.set("form_date", "inf");
      setIsInfinity(true);
    } else {
      if (formInfo.date.trim() == "") {
        form.set("form_date", "inf");
        setIsInfinity(true);
      } else {
        form.set("form_date", formInfo.date);
      }
    }

    formInfo.isTryToSend = true;

    if (form.get("questions").length == 0) {
      setIsNoQuestions(true);
    } else {
      setIsNoQuestions(false);

      form.get("questions").map((question) => {
        if (question.question_title.trim() == "") {
          setIsFindEmpty(true);
        }
      });

      console.log(Object.fromEntries(form));

      var data = JSON.stringify(Object.fromEntries(form));
      var config = {
        method: "post",
        url: "http://127.0.0.1:8000/api/create_form",
        headers: {
          Authorization:
            "Basic PEJhc2ljIEF1dGggVXNlcm5hbWU+OjxCYXNpYyBBdXRoIFBhc3N3b3JkPg==",
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <Context.Provider
      value={{
        removeTodo,
        removeGroupInGroupQuestion,
        addGroupChild,
        changeGroupChild,
        removeGroupChild,
        changeQuestionTitle,
        changeQuestionDescription,
        changeQuestionComment,
      }}
    >
      <div className="container mt-4 mt-lg-5">
        <div className="row">
          <div className="col-12">
            <div className="card mb-3">
              <div className="card-body">
                <div className="input-group mb-3">
                  <div className="input-group-prepend w-100 mb-1">
                    <div className="input-group-text d-lg-none d-flex w-100">
                      Имя формы
                    </div>
                  </div>
                  <div className="input-group-prepend">
                    <span
                      style={{ width: 14 + "rem" }}
                      className="input-group-text d-lg-flex d-none"
                    >
                      Имя формы
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setFormInfo({
                        name: e.target.value,
                        description: formInfo.description,
                        date: formInfo.date,
                        isInf: formInfo.isInf,
                        isTryToSend: formInfo.isTryToSend,
                      });
                    }}
                    required={true}
                    defaultValue={formInfo.name}
                  />
                </div>
                <div className="input-group">
                  <div className="input-group-prepend w-100 mb-1">
                    <div className="input-group-text d-lg-none d-flex w-100">
                      Пароль к результатам
                    </div>
                  </div>
                  <div className="input-group-prepend">
                    <span
                      style={{ width: 14 + "rem" }}
                      className="input-group-text d-lg-flex d-none"
                    >
                      Пароль к результатам
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setFormInfo({
                        name: formInfo.name,
                        description: e.target.value,
                        date: formInfo.date,
                        isInf: formInfo.isInf,
                        isTryToSend: formInfo.isTryToSend,
                      });
                    }}
                    defaultValue={formInfo.description}
                  ></input>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <div className="input-group">
                  <div className="input-group-prepend w-100 mb-1">
                    <div className="input-group-text d-lg-none d-flex w-100">
                      Дата окончания
                    </div>
                  </div>

                  <div className="input-group-prepend d-lg-none d-flex w-100 mb-1">
                    <div className="input-group-text  w-100">
                      Бессрочная форма
                    </div>
                    <Switch
                      name="checkedB"
                      color="primary"
                      onChange={(e) => {
                        setFormInfo({
                          name: formInfo.name,
                          description: formInfo.description,
                          date: e.target.value,
                          isInf: formInfo.isInf ? false : true,
                          isTryToSend: formInfo.isTryToSend,
                        });
                      }}
                    />
                  </div>

                  <div className="input-group-prepend d-lg-flex d-none">
                    <span
                      style={{ width: 15 + "rem" }}
                      className="input-group-text"
                    >
                      Бессрочная форма
                      <Switch
                        name="checkedB"
                        color="primary"
                        onChange={(e) => {
                          setFormInfo({
                            name: formInfo.name,
                            description: formInfo.description,
                            date: e.target.value,
                            isInf: formInfo.isInf ? false : true,
                            isTryToSend: formInfo.isTryToSend,
                          });
                        }}
                      />
                    </span>
                  </div>
                  <div className="input-group-prepend">
                    <span
                      style={{ width: 14 + "rem" }}
                      className="input-group-text d-none d-lg-flex"
                      hidden={formInfo.isInf}
                    >
                      Дата окончания
                    </span>
                  </div>
                  <input
                    type="date"
                    className="form-control m-2"
                    onChange={(e) => {
                      setFormInfo({
                        name: formInfo.name,
                        description: formInfo.description,
                        date: e.target.value,
                        isInf: formInfo.isInf,
                        isTryToSend: formInfo.isTryToSend,
                      });
                    }}
                    defaultValue={formInfo.date}
                    hidden={formInfo.isInf}
                  />
                </div>
              </div>
            </div>

            {loading && <Loader />}

            <QuestionList todos={todos} onToggle={toggleTodo} />

            <React.Suspense fallback={<Loader />}>
              <AddQuestion onCreate={addTodo} />
            </React.Suspense>

            <div className="row">
              {formInfo.name.trim() == "" && isInfinity && (
                <div className="col-12 mt-2 justify-content-center text-center">
                  <div className="alert alert-info" role="alert">
                    <NoteIcon size={20} /> Заполните имя формы
                  </div>
                </div>
              )}

              {formInfo.name.trim() != "" &&
                formInfo.name.trim().length < 2 &&
                isInfinity && (
                  <div className="col-12 mt-2 justify-content-center text-center">
                    <div className="alert alert-info" role="alert">
                      <NoteIcon size={20} /> Имя формы не может быть короче 2
                      символов
                    </div>
                  </div>
                )}

              {formInfo.description.trim() == "" && isInfinity && (
                <div className="col-12 justify-content-center text-center">
                  <div className="alert alert-info" role="alert">
                    <KeyIcon size={20} /> Защитите доступ к результатам формы
                  </div>
                </div>
              )}

              {formInfo.description.trim() != "" &&
                formInfo.description.trim().length < 3 &&
                isInfinity && (
                  <div className="col-12 mt-2 justify-content-center text-center">
                    <div className="alert alert-info" role="alert">
                      <NoteIcon size={20} /> Пароль формы не может быть короче 3
                      символов
                    </div>
                  </div>
                )}

              {isFindEmpty && (
                <div className="col-12 justify-content-center text-center">
                  <div className="alert alert-info" role="alert">
                    {isInfinity}
                    <PencilIcon size={20} /> Заполните пустые поля
                  </div>
                </div>
              )}

              {isNoQuestions && (
                <div className="col-12 justify-content-center text-center">
                  <div className="alert alert-info" role="alert">
                    {isInfinity}
                    <SmileyIcon size={20} /> Кажется Вы забыли добавить вопросы
                  </div>
                </div>
              )}

              {formInfo.date.trim() == "" && isInfinity && (
                <div className="col-12 justify-content-center text-center">
                  <div className="alert alert-info" role="alert">
                    {isInfinity}
                    <ClockIcon size={20} /> Не выбрана дата окончания, по
                    умолчанию: <strong>бессрочно</strong>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="col-12  d-lg-flex d-none justify-content-lg-center">
            <button
              className="btn btn-outline-secondary m-2"
              onClick={showData}
              type="submit"
            >
              Создать
            </button>
          </div>
          <div className="col-12 text-center d-lg-none d-flex">
            <button
              className="btn btn-outline-secondary mt-2 mb-2 w-100"
              onClick={showData}
              type="submit"
            >
              Создать
            </button>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

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
import connectionErrorImg from "./connection.jpg";

const AddModal = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./CreateFormModal/Modal"));
      }, 0);
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

  document.title = "VF | Конструктор";

  const [isInfinity, setIsInfinity] = React.useState(false);
  const [isFindEmpty, setIsFindEmpty] = React.useState(false);
  const [isNoQuestions, setIsNoQuestions] = React.useState(false);
  const [questionsList, setQuestionsList] = React.useState([]);
  const [countQuestion, setCountQuestion] = React.useState(0);
  const [link, setLink] = React.useState("");
  const [modalWindow, setModalWindow] = React.useState(false);
  const [isConnectionError, setIsConnectionError] = React.useState(true);

  function toggleTodo(
    type,
    id = undefined,
    value = undefined,
    customRemove = undefined
  ) {
    if (type === "numbers") {
      var tmp = questionsList;
      tmp.map((val) => {
        if (val.questionNumber == id) {
          val.data = [1, 2, 3, 4, 5];
          val.data.isComment = value;
        }
      });
      setQuestionsList(tmp);
    } else if (type === "custom") {
      if (customRemove === undefined) {
        var tmp = questionsList;
        tmp.map((val) => {
          if (val.questionNumber == id + 1) {
            if (value === true || value === false) {
              val.isComment = value;
            } else {
              val.data.push(value);
            }
          }
        });
        setQuestionsList(tmp);
      } else {
        var tmp = questionsList;
        tmp.map((val) => {
          if (val.questionNumber == id + 1) {
            val.data = val.data.filter((word) => word != value);
          }
        });
        setQuestionsList(tmp);
      }
    }
  }

  function changeQuestionTitle(id, title_value) {
    var tmp = questionsList;
    tmp.map((question) => {
      if (question.questionNumber == id + 1) {
        question.question_title = title_value;
      }
    });
    setQuestionsList(tmp);
  }

  function changeQuestionDescription(id, description_value) {
    var tmp = questionsList;
    tmp.map((question) => {
      if (question.questionNumber == id + 1) {
        question.question_description = description_value;
      }
    });
    setQuestionsList(tmp);
  }

  function changeQuestionComment(id, status) {
    var tmp = questionsList;
    tmp.map((question) => {
      if (question.questionNumber == id + 1) {
        question.isComment = status;
      }
    });
    setQuestionsList(tmp);
  }

  function removeTodo(id) {
    setCountQuestion(countQuestion - 1);
    var count = 1;
    setQuestionsList(questionsList.filter((todo) => todo.id !== id));
    questionsList.map((el) => {
      if (el.id !== id) {
        el.questionNumber = count;
        count += 1;
      }
    });
  }

  function addTodo(title) {
    var tmp = countQuestion;
    setCountQuestion(countQuestion + 1);
    setQuestionsList(
      questionsList.concat([
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

  function removeGroupInGroupQuestion(group_id) {
    var questionsList_tmp = questionsList;
    var tmp = [];
    questionsList_tmp.map((question) => {
      if (question.title == "group") {
        question.data.map((answer) => {
          if (answer.group_id != group_id) {
            tmp.push(answer);
          }
        });
      }
      question.data = tmp;
    });
    setQuestionsList(questionsList_tmp);
  }

  function switchCommentInGroupQuestion(index, value) {
    var questionsList_tmp = questionsList;
    questionsList_tmp.map((question) => {
      if (question.title == "group" && question.questionNumber == index + 1) {
        question.isComment = value;
      }
    });
    setQuestionsList(questionsList_tmp);
  }

  function addGroupChild(child) {
    var tmp = questionsList;
    tmp.map((questionsList_item) => {
      if (questionsList_item.title === "group") {
        questionsList_item.data.push(child);
      }
    });
    setQuestionsList(tmp);
  }

  function removeGroupChild(childs, child_id) {
    var tmp = questionsList;
    var new_items = [];
    tmp.map((questionsList_item) => {
      questionsList_item.data.map((data) => {
        if (data.child_id != child_id) {
          new_items.push(data);
        }
      });
      questionsList_item.data = new_items;
      new_items = [];
    });
    setQuestionsList(tmp);
  }

  function changeGroupChild(childs) {
    var tmp = questionsList;
    tmp.map((questionsList_item) => {
      if (questionsList_item.title === "group") {
        questionsList_item.data.map((data) => {
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
      }
    });
    setQuestionsList(tmp);
  }

  function sendCreatedForm() {
    var findEmpty = false;
    var axios = require("axios");
    var form = new Map();
    form.set("form_name", formInfo.name);
    form.set("form_description", formInfo.description);
    form.set("questions", questionsList);
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
          findEmpty = true;
        }
      });

      var questions_list = form.get("questions");
      questions_list.map((question) => {
        if (question.title == "group") {
          question.data.map((el) => {
            if (el.group_name == "" || el.group_name == undefined) {
              findEmpty = true;
            }
            if (Object.values(el).includes("")) {
              findEmpty = true;
            }
          });
        } else if (question.title == "custom") {
          if (question.question_title == "") {
            findEmpty = true;
          }
          if (Object.values(question.data).includes("")) {
            findEmpty = true;
          }
        } else if (question.title == "numbers") {
          if (question.question_title == "") {
            findEmpty = true;
          }
        }
      });

      setIsFindEmpty(findEmpty);
      console.log(form);
      if (!findEmpty) {
        var data = JSON.stringify(Object.fromEntries(form));
        var config = {
          method: "post",
          url: "http://176.57.217.201:8000/api/create_form",
          headers: {
            Authorization:
              "Basic PEJhc2ljIEF1dGggVXNlcm5hbWU+OjxCYXNpYyBBdXRoIFBhc3N3b3JkPg==",
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            var link_ = response.data.link;
            if (typeof link_ == "number") {
              setLink(link_);
              setModalWindow(true);
            } else {
              setIsConnectionError(false);
            }
          })
          .catch((error) => {
            console.log(error);
            setIsConnectionError(false);
          });
      }
    }
  }

  return (
    <Context.Provider
      value={{
        removeTodo,
        removeGroupInGroupQuestion,
        switchCommentInGroupQuestion,
        addGroupChild,
        changeGroupChild,
        removeGroupChild,
        changeQuestionTitle,
        changeQuestionDescription,
        changeQuestionComment,
      }}
    >
      {modalWindow ? (
        <React.Suspense fallback={<Loader />}>
          <AddModal
            onCreate={AddModal}
            visible={modalWindow}
            formName={formInfo.name}
            formPass={formInfo.description}
            formLink={link}
          />
        </React.Suspense>
      ) : (
        <div></div>
      )}

      <div
        className="container mt-4 mt-lg-5"
        style={modalWindow ? { opacity: "0.4" } : { opacity: "1" }}
      >
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

            <QuestionList questionsList={questionsList} onToggle={toggleTodo} />

            <AddQuestion onCreate={addTodo} />

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
          <div
            hidden={isConnectionError}
            className="col-12 justify-content-center text-center mt-4 mb-4"
          >
            <div className="h5">Ошибка соединения</div>
            <div className="row">
              <div className="col-12 col-md-6 offset-md-3">
                <img className="w-100" src={connectionErrorImg} />
              </div>
            </div>
            <div className="h5">Попробуйте ещё раз</div>
          </div>

          <div className="col-12  d-lg-flex d-none justify-content-lg-center">
            <button
              className="btn btn-outline-secondary m-2"
              onClick={sendCreatedForm}
              type="submit"
            >
              Создать
            </button>
          </div>
          <div className="col-12 text-center d-lg-none d-flex">
            <button
              className="btn btn-outline-secondary mt-2 mb-2 w-100"
              onClick={sendCreatedForm}
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

import React, { useEffect } from "react";
import Loader from "../Loader";
import Number from "./Numbers";
import Group from "./Group";
import Custom from "./Custom";
import Cookies from "js-cookie";

function VotePage(props) {
  const [loader, setLoader] = React.useState(true);
  const [questionList, setQuestionList] = React.useState();
  const [answers, setAnswers] = React.useState(new Map());
  const [comments, setComments] = React.useState(new Map());
  const [isEnd, setIsEnd] = React.useState(false);

  function changeAnswerList(question, value) {
    let tmp = answers;
    if (tmp.get(question) === undefined) {
      tmp.set(question, value);
    } else {
      tmp.delete(question);
      tmp.set(question, value);
    }
    setAnswers(tmp);
  }

  function changeCommentsList(question, value) {
    let tmp = comments;
    if (tmp.get(question) === undefined) {
      tmp.set(question, value);
    } else {
      tmp.delete(question);
      tmp.set(question, value);
    }
    setComments(tmp);
  }

  function sendForm() {
    let toSend = {
      form_key: props.formKey,
      answers: Object.fromEntries(answers),
      comments: Object.fromEntries(comments),
    };
    let axios = require("axios");
    let config = {
      method: "post",
      url: "http://176.57.217.201:8000/api/send_form",
      headers: {
        Authorization:
          "Basic PEJhc2ljIEF1dGggVXNlcm5hbWU+OjxCYXNpYyBBdXRoIFBhc3N3b3JkPg==",
        "Content-Type": "application/json",
      },
      data: toSend,
    };

    axios(config)
      .then(function (response) {
        Cookies.set(props.formKey, true);
        document.location.href =
          "http://voteforms.ru/results/" + props.formKey;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    let axios = require("axios");
    let data = JSON.stringify({ form_key: props.formKey });
    let config = {
      method: "post",
      url: "http://176.57.217.201:8000/api/get_form",
      headers: {
        Authorization:
          "Basic PEJhc2ljIEF1dGggVXNlcm5hbWU+OjxCYXNpYyBBdXRoIFBhc3N3b3JkPg==",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        let questions = JSON.parse(response.data);
        setQuestionList(questions);
        setLoader(false);

        let end_date_ = questions[0].date.slice(0, 10);
        let current_date_ = new Date().toISOString().slice(0, 10);
        let end_date = new Date(end_date_);
        let current_date = new Date(current_date_);
        if (end_date - current_date < 0) {
          setIsEnd(true);
        }
      })
      .catch(function (error) {
        setLoader(false);
        console.log(error);
      });
  }, []);

  if (loader) {
    return (
      <div>
        <Loader />
      </div>
    );
  } else {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-3 h4">
              {questionList[0].form_name}
            </div>
            {questionList.map((question) => {
              if (question.question_type === "numbers") {
                return (
                  <Number
                    data={question}
                    onChange={changeAnswerList}
                    onCommentChange={changeCommentsList}
                  />
                );
              } else if (question.question_type === "custom") {
                return (
                  <Custom
                    data={question}
                    onChange={changeAnswerList}
                    onCommentChange={changeCommentsList}
                  />
                );
              } else if (question.question_type === "group") {
                return (
                  <Group
                    data={question}
                    onChange={changeAnswerList}
                    onCommentChange={changeCommentsList}
                  />
                );
              }
            })}
            <div className="w-100 text-center mb-3">
              {isEnd === true ? (
                <button className="btn btn-secondary" disabled={true}>
                  Голосование окончено
                </button>
              ) : (
                <div>
                  {Cookies.get(props.formKey) === undefined ? (
                    <button className="btn btn-secondary" onClick={sendForm}>
                      Отправить
                    </button>
                  ) : (
                    <button className="btn btn-secondary" disabled={true}>
                      Вы уже голосовали
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VotePage;

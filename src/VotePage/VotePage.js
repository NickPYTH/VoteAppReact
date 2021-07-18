import React, { useContext, useState, useEffect } from "react";
import Context from "../context";
import Loader from "../Loader";
import Number from "./Numbers";
import Group from "./Group";
import Custom from "./Custom";
import axios from "axios";

function VotePage(props) {
  const [loader, setLoader] = React.useState(true);
  const [questionList, setQuestionList] = React.useState();

  useEffect(() => {
    var axios = require("axios");
    var data = JSON.stringify({ form_key: props.formKey });
    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/get_form",
      headers: {
        Authorization:
          "Basic PEJhc2ljIEF1dGggVXNlcm5hbWU+OjxCYXNpYyBBdXRoIFBhc3N3b3JkPg==",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        var questions = JSON.parse(response.data);
        setQuestionList(questions);
        setLoader(false);
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
            {questionList.map((question) => {
              if (question.question_type == "numbers") {
                return <Number data={question} />;
              } else if (question.question_type == "custom") {
                return <Custom data={question} />;
              } else if (question.question_type == "group") {
                return <Group data={question} />;
              }
              return (
                <div>
                  {question.question_name}|{question.question_type}|
                  {question.answers.map((answer) => {
                    var tmp = answer.answer;
                    console.log(tmp);
                    return <div>{tmp}</div>;
                  })}
                  <br />
                  ---------------------------------------------
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default VotePage;

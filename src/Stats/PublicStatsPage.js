import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader";
import { Bar } from "react-chartjs-2";

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function PublicStats(props) {
  const [loader, setLoader] = React.useState(true);
  const [questionList, setQuestionList] = React.useState();

  document.title = "VF | Результаты";

  useEffect(() => {
    var axios = require("axios");
    var data = JSON.stringify({ form_key: props.formKey });
    var config = {
      method: "post",
      url: "http://176.57.217.201:8000/api/get_form_public_results",
      headers: {
        Authorization:
          "Basic PEJhc2ljIEF1dGggVXNlcm5hbWU+OjxCYXNpYyBBdXRoIFBhc3N3b3JkPg==",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        var questions = response.data;
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
          <div className="w-100 text-center h3">Текущие результаты</div>
          {questionList.questions.map((ans) => {
            var arr = ans.answers;
            var result = {};
            for (var i = 0; i < arr.length; ++i) {
              var a = arr[i];
              if (result[a] != undefined) ++result[a];
              else result[a] = 1;
            }
            var labels = [];
            return (
              <div className="col-12 col-lg-6">
                <Bar
                  data={{
                    labels: Object.keys(result),
                    datasets: [
                      {
                        label: ans.question,
                        backgroundColor: "#6c757d",
                        data: Object.values(result),
                      },
                    ],
                  }}
                  options={options}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PublicStats;

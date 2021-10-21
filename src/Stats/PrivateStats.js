import React, { useEffect } from "react";
import Loader from "../Loader";
import { Bar, Radar } from "react-chartjs-2";

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

function PrivateStats(props) {
  const [loader, setLoader] = React.useState(true);
  const [questionList, setQuestionList] = React.useState();
  const [fileLink, setFileLink] = React.useState("");

  useEffect(() => {
    let axios = require("axios");
    let data = JSON.stringify({ form_key: props.formKey });
    let config = {
      method: "post",
      url: "http://176.57.217.201:8000/api/get_form_private_results",
      headers: {
        Authorization:
          "Basic PEJhc2ljIEF1dGggVXNlcm5hbWU+OjxCYXNpYyBBdXRoIFBhc3N3b3JkPg==",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        let questions = response.data;
        setQuestionList(questions);
        setFileLink(questions.file_link);
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
          <div className="w-100 text-center h3">Статистика</div>
          {questionList.questions.map((ans) => {
            let arr = ans.answers;
            let result = {};
            for (let i = 0; i < arr.length; ++i) {
              let a = arr[i];
              if (result[a] != undefined) ++result[a];
              else result[a] = 1;
            }
            let labels = [];
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

        <div className="row">
          <div className="col-md-8 offset-md-2 col-12">
            <Radar
              data={{
                labels: ["Тест", "Тест", "Тест", "Тест"],
                datasets: [
                  {
                    data: [20, 10, 4, 2],
                  },
                ],
              }}
              options={options}
            />
          </div>
        </div>

        <div className="w-100 text-center">
          <a href={fileLink} className="btn btn-outline-secondary">
            Скачать статитстику
          </a>
        </div>
      </div>
    );
  }
}

export default PrivateStats;

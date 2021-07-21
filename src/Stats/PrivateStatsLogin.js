import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Loader from "./LogInLoader";
import { Bar } from "react-chartjs-2";
import Stats from "./PrivateStats";

function PrivateStatsLogin(props) {
  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  const [ nameInput, setNameInput ] = React.useState("");
  const [ passwordInput, setPasswordInput] = React.useState("");
  const [ isRemember, setIsRemember ] = React.useState(false);
  const [ isLoginFailed, setIsLoginFailed ] = React.useState(false);
  const [ isLogedIn, setIsLogedIn ] = React.useState(false);
  const [ formKey_, setFormKey ] = React.useState()
  const [ loader, setLoader] = React.useState(false);
  const [ jokeList, setJokeList ] = React.useState([
    "#pa$$word$",
    "%passw0rd!",
    "@pa$$word|",
    "+passw0rd-",
    "-pa$$word#",
    "+password&",
    "!pa$$ord@",
    "$passw0rd+",
    "^password%",
    "|passw0rd(",
  ])

  function login(form_name, password){
    console.log(form_name, password, isRemember);
    setLoader(true);
    var axios = require("axios");
    var data = JSON.stringify({ form_name: form_name, password: password });
    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/login_private_stats",
      headers: {
        Authorization:
          "Basic PEJhc2ljIEF1dGggVXNlcm5hbWU+OjxCYXNpYyBBdXRoIFBhc3N3b3JkPg==",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        if (response.data == "Failed"){
          setIsLoginFailed(true);
        }
        else{
          setIsLoginFailed(false);
          setIsLogedIn(true);
          console.log(response.data);
          setFormKey(response.data);
        }
        setLoader(false);
      })
      .catch(function (error) {
        setLoader(false);
        console.log(error);
      });

  }

  if (isLogedIn && formKey_ != undefined) {
    return (
      <div>
        <Stats formKey={formKey_}/>
      </div>
    );
  } else {
    return (
      <div className="container mt-3 mt-lg-5">
        <div className="row">
          <div className="col-12">
          <div>
            <p className="h3 text-center">Просмотр статистики</p>
            <div className="form-group">
              <label>Название формы</label>
              <input 
                type="email" 
                className="form-control"
                placeholder="Введите название вашей формы"
                onChange={(e)=>{
                  setNameInput(e.target.value)
                }}
                defaultValue={nameInput}/>
            </div>
            <div className="form-group">
              <label>Пароль от формы</label>
              <input 
                type="password" 
                className="form-control" 
                placeholder="Ваш очень надёжный пароль"
                onChange={(e)=>{
                  setPasswordInput(e.target.value)
                }}
                defaultValue={passwordInput}
                />
                <small className="form-text text-muted">( •_•) {jokeList[randomInteger(0, 9)]} (•_• )</small>
            </div>
            <div className="form-check mb-2">
              <input 
                type="checkbox"
                className="form-check-input"
                onChange={()=>{
                  setIsRemember(!isRemember);
                }}
                defaultValue={isRemember}
                />
              <label className="form-check-label">Запомнить пароль</label>
            </div>
            <div className="w-100 text-center">
              {isLoginFailed ? 
                <div class="alert alert-primary" role="alert">
                  Ошибка авторизации
                </div> :
                <div></div>
              }
              {loader ? (<Loader/>) : 
                <button 
                type="submit"  
                className="btn btn-secondary"
                onClick={()=>{
                  login(nameInput, passwordInput);
                }}
                >Войти</button>
              } 
              
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PrivateStatsLogin;

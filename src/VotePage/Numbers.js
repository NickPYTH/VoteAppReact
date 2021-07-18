import React, { useContext, useState, useEffect } from "react";
import Context from "../context";
import Loader from "../Loader";
import axios from "axios";


function NumberQuestion(props) {
    return(
        <div className="card w-100 mb-3">
        <div className="card-body">
            <h5 className="card-title">{props.data.question_name}</h5>
            <p className="card-text">{props.data.question_description}</p>
            <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Выберите оценку</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01">
                <option selected value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </select>
            </div>
        {props.data.question_comment ? 
        <div class="form-group">
        <label for="exampleFormControlTextarea1">Ваш комментарий (необязательно)</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        :
        <div>
            
        </div>
        }
        </div>
        </div>
    )
}

export default NumberQuestion;
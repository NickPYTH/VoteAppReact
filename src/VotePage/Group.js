import React, { useContext, useState, useEffect } from "react";
import Context from "../context";
import Loader from "../Loader";
import axios from "axios";


function GroupQuestion(props) {
    return(
        <div className="card w-100 mb-3">
        <div className="card-body">
            <h5 className="card-title">{props.data.question_name}</h5>
            <p className="card-text">{props.data.question_description}</p>
            <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Выберите ответ</label>
            </div>
            <select id="select"> 
                <option value="">TODO</option>
                <optgroup hidden={false} label="Option group 1">
                <option value="">Option 1</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
                </optgroup>
                <optgroup label="Option group 2">
                <option value="">Option 4</option>
                <option value="">Option 5</option>
                <option value="">Option 6</option>
                </optgroup>
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

export default GroupQuestion;
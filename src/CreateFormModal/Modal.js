import React from 'react';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

const modal = {
  height: "70vh",
  width:"100vw",
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 100,
}

function Modal(props) {
  if (props.visible){
    var form_name = props.formName;
    var form_password = props.formPass;
    var link = "http://localhost:3000/"+props.formLink;
    var backColor = "#FFFFFF";
    var fontColor = "#000000";
    var level = 'L';  // ('L' 'M' 'Q' 'H')
    return (
      <div style={modal}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Форма успешно создана</h5>
              </div>
              <div className="modal-body">
                <p className="text-center">Название: <strong>{form_name}</strong><br/>
                </p>
                <p className="text-center">Пароль: <strong>{form_password}</strong><br/>
                </p>
                <p className="text-center">Ccылка и QR код для доступа к форме<br/>
                <a href={link}>{link}</a>
                </p>
                <div className="text-center mb-3">
                  <QRCode value={link} size={256} bgColor={backColor} fgColor={fontColor} level={level}/>
                </div>
                <p className="text-center">
                  Для изменения формы перейдите в раздел <strong>Редакция</strong>
                </p>
              </div>
              <div className="modal-footer">
                <a href={link} className="btn btn-primary w-100">Перейти к опросу</a>
              </div>
            </div>
          </div>
      </div>
    )
  }
  else{
    return(
      <div></div>
    )
  }
  
}

export default Modal;
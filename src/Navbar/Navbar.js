import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function Navbar() {
  const [activeTab, setActiveTab] = React.useState("Main");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link
        to="/"
        className="navbar-brand"
        onClick={() => {
          setActiveTab("Main");
        }}
      >
        VoteForms
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              onClick={() => {
                setActiveTab("Main");
              }}
            >
              {activeTab === "Main" ? (
                <div style={{ fontWeight: "500", color: "#212529" }}>
                  Главная
                </div>
              ) : (
                <div>Главная</div>
              )}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/constructor"
              className="nav-link"
              onClick={() => {
                setActiveTab("Constructor");
              }}
            >
              {activeTab === "Constructor" ? (
                <div style={{ fontWeight: "500", color: "#212529" }}>
                  Конструктор
                </div>
              ) : (
                <div>Конструктор</div>
              )}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/edit"
              className="nav-link"
              onClick={() => {
                setActiveTab("Edit");
              }}
            >
              {activeTab === "Edit" ? (
                <div style={{ fontWeight: "500", color: "#212529" }}>
                  Редакция
                </div>
              ) : (
                <div>Редакция</div>
              )}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/stats"
              className="nav-link"
              onClick={() => {
                setActiveTab("Stats");
              }}
            >
              {activeTab === "Stats" ? (
                <div style={{ fontWeight: "500", color: "#212529" }}>
                  Cтатистика
                </div>
              ) : (
                <div>Статистика</div>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import "./css/navbar.css";
export const Navbar = (props) =>
  props.color &&
  props.height &&
  props.title &&
  props.links &&
  Array.isArray(props.links) &&
  props.links.length > 0 ? (
    <div
      className="navbar-preferences--shell"
      style={{
        backgroundColor: props.color,
        height: props.height
      }}
    >
      <div className="navbar-preferences--heading">
        <div className="navbar-preferences--center--shell">
          <div className="navbar-preferences--center--inner">
            <div>{props.title}</div>
            <div>
              {props.links.map((element) => (
                <a href={element.url} className="navbar-preferences--link">
                  {element.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div>
        <ul>
          <strong>Similar</strong> {""}
          {props.synonyms.map(function (synonym, index) {
            return (
              <li className="Synonyms-li" key={index}>
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

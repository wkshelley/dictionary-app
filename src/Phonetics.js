import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} rel="noreferrer">
        <strong>Listen</strong> {""} <i class="fas fa-volume-up"></i>
      </a>
      <br />
      <div className="text">/{props.phonetic.text}/</div>
    </div>
  );
}

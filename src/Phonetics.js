import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <strong>Listen</strong> {""} <i class="fas fa-volume-up"></i>
      </a>
      <br />/{props.phonetic.text}/
    </div>
  );
}

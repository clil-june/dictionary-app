import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Definition(props) {
  const results = props.results;

  if (!results) {
    return null;
  }

  const meanings = Array.isArray(results.meanings) ? results.meanings : [];

  return (
    <div>
      <h2>{results.word}</h2>
      <Phonetics phonetics={results.phonetics} word={results.word} />
      {meanings.map((meaning, index) => (
        <div id="meaning" key={index}>
          <Meaning meaning={meaning} />
        </div>
      ))}
    </div>
  );
}

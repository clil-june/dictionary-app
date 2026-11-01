import React from "react";

export default function Synonyms(props) {
  const synonyms = Array.isArray(props.synonyms)
    ? props.synonyms.filter(Boolean).slice(0, 3)
    : [];

  if (synonyms.length === 0) {
    return null;
  }

  return (
    <div id="synonyms">
      <p>Synonyms: <br />{synonyms.join(", ")}.</p>
    </div>
  );
}

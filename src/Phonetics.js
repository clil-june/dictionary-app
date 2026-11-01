import React from "react";

export default function Phonetics(props) {
  const phonetics = Array.isArray(props.phonetics) ? props.phonetics : [];
  const pronunciation = phonetics.find((item) => item && item.audio) ||
    phonetics.find((item) => item && item.text);

  if (!pronunciation) {
    return null;
  }

  const audioUrl = pronunciation.audio
    ? (pronunciation.audio.startsWith("//")
        ? `https:${pronunciation.audio}`
        : pronunciation.audio)
    : null;

  return (
    <div>
      {audioUrl && (
        <a
          href={audioUrl}
          target="_blank"
          rel="noreferrer"
          id="phonetics-audio"
          aria-label="Play pronunciation"
        >
          <i className="fas fa-volume-up"></i>
        </a>
      )}
      {pronunciation.text && (
        <span id="phonetics-text">{pronunciation.text}</span>
      )}
    </div>
  );
}

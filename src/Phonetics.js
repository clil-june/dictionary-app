import React from "react";

export default function Phonetics(props) {
  const phonetics = Array.isArray(props.phonetics) ? props.phonetics : [];
  const pronunciation = phonetics.find((item) => item && item.text);

  function speakWord() {
    if (!("speechSynthesis" in window) || !props.word) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(props.word);
    utterance.lang = "en-GB";
    window.speechSynthesis.speak(utterance);
  }

  const canSpeak = typeof window !== "undefined" && "speechSynthesis" in window;

  if (!pronunciation && !canSpeak) {
    return null;
  }

  return (
    <div>
      {canSpeak && (
        <button
          type="button"
          onClick={speakWord}
          id="phonetics-audio"
          aria-label={`Hear the pronunciation of ${props.word}`}
          title="Hear pronunciation"
        >
          <i className="fas fa-volume-up"></i>
        </button>
      )}
      {pronunciation && pronunciation.text && (
        <span id="phonetics-text">{pronunciation.text}</span>
      )}
    </div>
  );
}

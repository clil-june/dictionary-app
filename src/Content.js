import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Definition from "./Definition";
import "./Content.css";
import reading from "./reading.svg";

export default function Content() {
  const [word, setWord] = useState("joy");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = useCallback((searchWord) => {
    const trimmedWord = searchWord.trim();

    if (!trimmedWord) {
      setResults(null);
      setError("Please enter a word to search.");
      return;
    }

    setLoading(true);
    setError("");
    setResults(null);

    axios
      .get(`/.netlify/functions/dictionary?word=${encodeURIComponent(trimmedWord)}`)
      .then((response) => {
        const entry = Array.isArray(response.data) ? response.data[0] : null;

        if (!entry) {
          setError("No definition was found for that word.");
          return;
        }

        setResults(entry);
      })
      .catch((requestError) => {
        if (requestError.response && requestError.response.status === 404) {
          setError("Sorry, that word wasn't found. Check the spelling and try again.");
        } else {
          setError("The dictionary is temporarily unavailable. Please try again in a moment.");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    search("joy");
  }, [search]);

  function handleSubmit(event) {
    event.preventDefault();
    search(word);
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Content">
      <h1>Dictionary</h1>
      <form id="search-form" autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type any word"
          id="search-bar"
          value={word}
          onChange={handleChange}
          aria-label="Word to look up"
        />
      </form>
      <img className="reading" alt="Reading illustration" src={reading} />
      {loading && <p role="status" className="dictionary-status">Looking up your word…</p>}
      {error && <p role="alert" className="dictionary-status">{error}</p>}
      <Definition results={results} />
    </div>
  );
}

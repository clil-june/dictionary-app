import React, {useState} from "react";
import axios from "axios";
import Definition from "./Definition";
import "./Content.css";

export default function Content(){
  let [word, setWord]=useState("");
  let [results, setResults]=useState(null);

  function handleResponse(response){
    setResults(response.data[0]);
    
  }

  function search(event){
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${word}`
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange (event){
    setWord(event.target.value);
  }
    return (
        <div className="Content">
            <h1>
                Dictionary
            </h1>
            <form id="search-form" autoComplete="off" onSubmit={search} >
                <input type="search" placeholder="Type any word" id="search-bar" onChange={handleChange} />
            </form>
            <Definition results={results} />
        </div>
    );
}
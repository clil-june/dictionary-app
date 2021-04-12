import React, {useState} from "react";
import axios from "axios";
import "./Content.css";

export default function Content(){
  let [word, setWord]=useState("");

  function handleResponse(response){
    console.log(response.data);
  }

  function search(event){
    event.preventDefault();
    alert(`searching forvthe defenition of ${word}`);
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
        </div>
    );
}
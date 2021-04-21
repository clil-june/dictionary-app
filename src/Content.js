import React, {useState} from "react";
import axios from "axios";
import Definition from "./Definition";
import "./Content.css";
import reading from "./reading.svg";

export default function Content(props){
  let [word, setWord]=useState("joy");
  let [results, setResults]=useState(null);
  let [loaded, setLoaded]=useState(false);

  function handleResponse(response){
    setResults(response.data[0]);
    
  }

  function search(){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${word}`
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleChange (event){
    setWord(event.target.value);
  }

  function load(){
    setLoaded(true);
    search();
  }
  if (loaded){
    return (
        <div className="Content">
            <h1>
                Dictionary
            </h1>
            <form id="search-form" autoComplete="off" onSubmit={handleSubmit} >
                <input type="search" placeholder="Type any word" id="search-bar" onChange={handleChange} />
            </form>
            <img className="reading" src={reading} />
            <Definition results={results} />
        </div>
    );}
    else{
      load();
      return null;
    }
  
}
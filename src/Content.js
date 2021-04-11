import React, {useState} from "react";
import "./Content.css";

export default function Content(){
  let [word, setWord]=useState("");

  function search(event){
    event.preventDefault();
    console.log(word);
  }

  function handleClick(event){
    setWord(event.target.value);
  }
    return (
        <div className="Content">
            <h1>
                Dictionary
            </h1>
            <form id="search-form" autoComplete="off" onClick={search}>
                <input type="search" placeholder="Type any word" id="search-bar" onClick={handleClick} />
                <input type="submit" value="search" id="search" />
            </form>
            <h2>{word}</h2>
        </div>
    );
}
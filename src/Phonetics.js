import React from "react";

export default function Phonetics(props){
    console.log(props.phonetics);
    return (
        <div>
            <a href={props.phonetics[0].audio} target="_blank" rel="noreferrer" id="phonetics-audio"><i className="fas fa-volume-up"></i></a> 
            <span id="phonetics-text" >{props.phonetics[0].text}</span>
        </div>
    );
}
import React from "react";

export default function Meaning(props){
    return (
        <div>
        <h4>
            {props.meaning.partOfSpeech}:
        </h4>
        {props.meaning.definitions.map(function(definition, index){
            return (
                <div key={index}>
                    <p>{definition.definition}
                    <br />
                    <small>"{definition.example}"</small></p>
                </div>
            );
        })}
        </div>
    );
}
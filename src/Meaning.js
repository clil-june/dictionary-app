import React from "react";

export default function Meaning(props){
	console.log(props.meaning);
    return (
        <div>
        <h4>
            {props.meaning.partOfSpeech}:
        </h4>
        {props.meaning.definitions.map(function(definition, index){
            return (
                <div key={index}>
                    <p>{definition.definition}</p>
                    <p id="example"><em>{definition.example}</em></p>
                </div>
            );
        })}
        </div>
    );
}
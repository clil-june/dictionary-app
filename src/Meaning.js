import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
	
    return (
        <div>
        <h4>
            {props.meaning.partOfSpeech}:
        </h4>
        {props.meaning.definitions.map(function(definition, index){
            return (
                <div key={index}>
                    <p id="definition">{definition.definition}</p>
                    <p id="example"><em>{definition.example}</em></p>
					<Synonyms synonyms={definition.synonyms} />
                </div>
            );
        })}
        </div>
    );
}
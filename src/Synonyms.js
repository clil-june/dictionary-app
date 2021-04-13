import React from "react";

export default function Synonyms(props){
  if(props.synonyms){
  return(
    <div id="synonyms">
      <p >Synonyms:<br />{props.synonyms[0]}, {props.synonyms[1]}, {props.synonyms[2]}, {props.synonyms[3]}, {props.synonyms[4]}.</p>
    </div>
    
  );
  }else{
    return null;
  }
}
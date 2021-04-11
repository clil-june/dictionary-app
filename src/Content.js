import React from "react";
import "./Content.css";

export default function Content(){
    return (
        <div calssName="Content">
            <h1>
                Dictionary
            </h1>
            <form id="search-form" autoComplete="off">
                <input type="search" placeholder="Type any word" id="search-bar" />
                <input type="submit" value="search" id="search" />
            </form>
        </div>
    );
}
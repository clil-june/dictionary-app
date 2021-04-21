import React from "react";
import Content from "./Content";
import "./App.css";
import Footer from "./Footer";

export default function App(){
  return(
      <div className="body">
    <div className="dictionary">
  <Content />
  </div>
  <Footer />
  </div>
    
  );
  
}
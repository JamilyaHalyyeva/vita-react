import { useState } from "react";

import "./App.css";
import Button from "./comonents/Button";
import Input from "./comonents/Input";

// React Components must return something or null
function App() {
  // this place is plain for JS
  const string ="start vita - react"
  const myage=35;
  const object={a:1, b:22222};
  return (
    //XLM start here 
    <div className="first-class">
      Hello have a nice and happy day
      <Button></Button>
      <Input></Input>
      <br />
      {string}
     <br />
      {myage}
      <br />
      {/* Object connot render but objects properties can render  */}
      {object.a}
      <br />
      {object.b}
    
    </div>
  );
}
export default App;

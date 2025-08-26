
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
const App = () => {

  const [selectedOption,setselectedOption]=useState("");

  const handleChnage=(option)=>{
    setselectedOption(option)
  }
  return (
    <div style={{backgroundColor:"green", width:500}} className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <ChildComponent1 onSelect={handleChnage}/>
        <ChildComponent2 onSelect={handleChnage}/>
        <p>Selected Option:  {selectedOption}</p>
    </div>
  )
}

export default App

import React from "react";
import ScrollPos from "./ScrollPos";
 
function App() {
  return (
    <div className="App">
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
      <ScrollPos>
        {position => <h1>{"Awesome !".substr(0, position)}</h1>}
      </ScrollPos>
      <div className="spacer" />
    </div>
  );
}
 
export default App;
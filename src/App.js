import React from "react"
import SiteDate from "./site.json"

function App() {
  return (
  <div>
    <pre> {JSON.stringify(SiteDate, null, 2)} </pre>
    <h2>Is React :jebaited or :pogchamp?</h2>
    <h3>The time is : {new Date().toDateString()}</h3>
  </div>)
}

export default App;

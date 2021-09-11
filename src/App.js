import SiteDate from "./site.json";
import "./App.css";
import { h } from "preact"

function App() {
  return (
    <div>
      <pre> {JSON.stringify(SiteDate, null, 2)} </pre>

      <h2>Is React :jebaited or :pogchamp?</h2>
      <h3>The time is : {new Date().toDateString()}</h3>
    </div>
  );
}

export default App;

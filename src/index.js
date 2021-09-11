import App from "./App.js";
import SiteData from "./site.json";
import { h, render } from "preact";

export default () => {
  render(<App />, document.getElementById("app"));
};


import * as React from "react";
import * as ReactDOM from "react-dom";

import "./style/index.css";
import "@atlaskit/css-reset/dist/bundle.css";

import App from "./page/App";
import { Store } from "./store";

declare var external;
declare var folder;

const render = () =>
  ReactDOM.render(
    <Store>
      <App />
    </Store>,
    document.getElementById("root")
  );

// counter.render = render;
// if (folder !== undefined) {
//   folder.render = render;
// }

window.onclick = function(e) {
  const elem = e.target as Element;
  if (elem.localName === "a") {
    e.preventDefault();
    external.invoke("openlink: " + elem.getAttribute("href"));
  }
};

render();

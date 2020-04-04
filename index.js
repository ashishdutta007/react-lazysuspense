import React, { lazy, Suspense, Component } from "react";
import { render } from "react-dom";
import "./style.css";

const Babooshka = lazy(() => import("./Print"));

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Suspense fallback={<div>"Loading..."</div>}>
          <Babooshka />
        </Suspense>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

import * as React from "react";
import { render } from "react-dom";
import Helmet, { HelmetProvider } from "react-helmet-async";

import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <HelmetProvider>
    <div style={styles}>
      <Helmet>
        <title>Hello World!!</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Hello name="CodeSandbox" />
      <h2>Start editing to see some magic happen {"\u2728"}</h2>
    </div>
  </HelmetProvider>
);

render(<App />, document.getElementById("root"));

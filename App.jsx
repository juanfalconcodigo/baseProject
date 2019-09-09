import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./components/header/index.jsx";
import { Main } from "./components/main/index.jsx";
import { Footer } from "./components/footer/index.jsx";

function All() {
  return (
    <div>
      {/* {Header()} */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<All />, document.getElementById("root"));

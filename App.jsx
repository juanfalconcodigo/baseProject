import React from "react";
import ReactDOM from "react-dom";


import { Header } from "./components/header/index.jsx";
import { Main } from "./components/main/index.jsx";
import { Footer } from "./components/footer/index.jsx";

function Card(props) {
  return (
    <article>
      <figure>{props.img}</figure>
      <h2>{props.title}</h2>
      <button>editar</button>
      <button>cancelar</button>
    </article>
  );
}

const articles = [
  {
    title: "articulo uno",
    img: ''
  },
  {
    title: "articulo dos",
    img: ''
  }
];

function All() {
  return (
    <div>
      <Header />
      <Main>
        {articles.map(function(article) {
          return <Card img="" title={article.title} />;
        })}
      </Main>
      <Footer />
    </div>
  );
}

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(tick, 1000);

// function tick2() {
//   const element = document.createElement('div');
//   element.innerHTML = `<div>
//   <h1>Hello, world!</h1>
//   <h2>It is ${new Date().toLocaleTimeString()}.</h2>
//   </div>`;

//   const root = document.getElementById("root");
//   root.innerHTML = '';
//   root.appendChild(element)
// }

// setInterval(tick2, 1000);

ReactDOM.render(<All />, document.getElementById("root"));

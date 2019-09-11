// import React from "react";
// import ReactDOM from "react-dom";

// import { Header } from "./components/header/index.jsx";
// import { Main } from "./components/main/index.jsx";
// import { Footer } from "./components/footer/index.jsx";

// // function Card(props) {
// //   const {
// //     img ,
// //     title
// //   } = props;

// //   return (
// //     <article>
// //       <figure>
// //         <img src={img} alt=""/>
// //       </figure>
// //       <h2>{title}</h2>
// //       <button>editar</button>
// //       <button>cancelar</button>
// //     </article>
// //   );
// // }

// class Card extends React.Component {
//   constructor(props) {
//     console.log("constructor!!!");
//     super(props);
//     this.img = props.img;
//     this.title = props.title;
//     this.names = [];
//   }

//   render() {
//     return (
//       <article>
//         <figure>
//           <img src={this.img} alt="" />
//         </figure>
//         <h2>{this.title}</h2>
//         <button>editar</button>
//         <button>cancelar</button>
//       </article>
//     );
//   }
//   //antes de montarse
//   componentWillMount() {
//     console.log("componenteWillMount antes de montarse");
//   }

//   // cuando ya se monto
//   componentDidMount() {
//     console.log("componentDidMount ya montado!!!");
//   }

//   // actualizacion!!!
//   componentWillReceiveProps(nextProps) {
//     console.log("componentWillReceiveProps", nextProps);
//   }

//   // actualizacion se ejecuta antes del render
//   componentWillUpdate(next) {
//     console.log("componentWillUpdate", next);
//   }

//   // shouldComponentUpdate(next_props, next_state) {
//   //   console.log("shouldComponentUpdate", next_props, next_state);
//   // }

//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//   }

//   componentWillUnmount() {
//     console.log("componentDidMount");
//   }
// }

// const articles = [
//   {
//     title: "articulo uno",
//     img:
//       "https://ep01.epimg.net/elpais/imagenes/2018/06/25/buenavida/1529929537_419627_1529933291_noticia_normal.jpg",
//     id: 0
//   },
//   {
//     title: "articulo dos",
//     img:
//       "https://ep01.epimg.net/elpais/imagenes/2018/06/25/buenavida/1529929537_419627_1529933291_noticia_normal.jpg",
//     id: 1
//   }
// ];

// function All() {
//   return (
//     <div>
//       <Header />
//       <Main>
//         {articles.map(function(article) {
//           return (
//             <Card key={article.id} img={article.img} title={article.title} />
//           );
//         })}
//       </Main>
//       <Footer />
//     </div>
//   );
// }

// // // function tick() {
// // //   const element = (
// // //     <div>
// // //       <h1>Hello, world!</h1>
// // //       <h2>It is {new Date().toLocaleTimeString()}.</h2>
// // //     </div>
// // //   );
// // //   ReactDOM.render(element, document.getElementById("root"));
// // // }

// // // setInterval(tick, 1000);

// // function tick2() {
// //   const element = document.createElement('div');
// //   element.innerHTML = `<div>
// //   <h1>Hello, world!</h1>
// //   <h2>It is ${new Date().toLocaleTimeString()}.</h2>
// //   </div>`;

// //   const root = document.getElementById("root");
// //   root.innerHTML = '';
// //   root.appendChild(element)
// // }

// // setInterval(tick2, 1000);

// // function tick() {
// //   const element = (
// //     <div>
// //       <h1>Hello, world!</h1>
// //       <h2>It is {new Date().toLocaleTimeString()}.</h2>
// //     </div>
// //   );
// //   ReactDOM.render(element, document.getElementById("root"));
// // }

// // function Clock(props) {
// //   return (
// //     <div>
// //       <h1>Hello, world!</h1>
// //       <h2>It is {props.date.toLocaleTimeString()}.</h2>
// //     </div>
// //   );
// // }

// // function tick() {
// //   ReactDOM.render(
// //     <div>
// //       <Clock date={new Date()} />
// //       <Clock date={new Date()} />
// //     </div>,
// //     document.getElementById('root')
// //   );
// // }

// // setInterval(tick, 1000);

// // ReactDOM.render(<All />, document.getElementById("root"));

// class Clock extends React.Component {
//   constructor(props) {
//     console.log('Clock', props.time)
//     super(props);
//     this.state = {date: new Date()};
//     this.time = props.time
//   }

//   delete(e) {
//     console.log('delete', e)

//   }

//   render() {
//     console.log('render')
//     return (
//       <div>
//         <Card title={this.state.date.toLocaleTimeString()} img=''/>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//         <button onClick={() => {this.delete}}></button>
//       </div>
//     );
//   }

//   componentDidMount() {
//     console.log('componentDidMount')
//     this.timerID = setInterval(() => {
//       return this.tick()
//     }, this.time)
//   }

//   tick() {
//     console.log('tick!!')
//     this.setState({
//       date: new Date()
//     });
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
// }

// ReactDOM.render(<div>
//   <Clock time={1000}/><Clock time={2000}/>
//   </div>, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";

function holaMundo() {
  console.log("hola mundo");
}

function holaMundoOver() {
  console.log("hola holaMundoOver!!");
}

function holaMundoOut() {
  console.log("hola holaMundoOut!!");
}

const button = (
  <button
    onClick={e => console.log("ola", e.target)}
    onMouseOver={holaMundoOver}
    onMouseOut={holaMundoOut}
  >
    BOTON
  </button>
);

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        isToggleOn: true 
    };
    // this.handleClick = this.handleClick.bind(this);
    console.log("inicializo Toggle!!");
    console.log(this.props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
     isToggleOn : !state.isToggleOn
    }));

    // this.setState(state => ({
    //   isToggleOn: !state.isToggleOn
    // }));
  }

  render() {
    console.log(this.state)
    return (
      <button onClick={this.handleClick}>
        click!!
        {this.state.isToggleOn ? "ON" : "OFF"} 
      </button>
    );
  }
}

ReactDOM.render(<Toggle min={2} max={10} />, document.getElementById("root"));

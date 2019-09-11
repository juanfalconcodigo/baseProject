import React from "react";
import './main.scss';

function Main(props) {
  console.log('main props', props)
  return (<main>
    {props.children}
  </main>);
}

export { Main };

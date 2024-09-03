import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
ReactDOM.render(
  <div>
      <Navigation/>
      <h1>Heading 1</h1>
      <p>Paragraph 3</p>
      <p>Hello</p>
    </div>,
    document.getElementById("root")
);


// without JSX
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World";
// document.getElementById("root").appendChild(h1);



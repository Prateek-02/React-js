import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Paragraph, { SecondParagraph, ThirdPara } from './Paragraph';

ReactDOM.render(
  <div>
      <Navigation/>
      <Paragraph/>
      <SecondParagraph/>
      <ThirdPara/>
  </div>,
    document.getElementById("root")
);


// without JSX
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World";
// document.getElementById("root").appendChild(h1);



import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
    <div>
    <h1>Heading 1</h1>
    <p3>Paragraph 3</p3>
    <p>Hello</p>
    </div>,
    document.getElementById("root")
);


// without JSX
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World";
document.getElementById("root").appendChild(h1);



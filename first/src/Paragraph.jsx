import React from "react";

function Paragraph(){
    return(
        <p className="a">This is first Paragraph</p>
    );
}

function SecondParagraph(){
    return(
        <h2 className="b">This is second paragraph</h2>
    );
}

function ThirdPara(){
    return(
        <h3 className="c">This is third parargaph</h3>
    );
}



export default Paragraph;
export {SecondParagraph,ThirdPara};
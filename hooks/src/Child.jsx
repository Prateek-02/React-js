import React from "react";
import Child2 from './Child2';
 
function Child(){
    return(
        <>
            <p>Child: This is child1 component</p>
            <Child2/>
        </>
    );
}

export default Child;
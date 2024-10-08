import React from "react";
import Child3 from './Child3';
 
function Child2(){
    return(
        <>
            <p>Child2: This is child2 component</p>
            <Child3/>
        </>
    );
}

export default Child2;
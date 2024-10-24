import { useMemo, useState } from 'react'

function Usememo(){
    const[add,setAdd] = useState(0);
    const[minus,setMinus] = useState(100);

    const multiplication = useMemo (function multiply(){
        console.log("Calculatin multiplication result....")
        return add*10
    },[add])

    return(
        <>
            <button onClick={ () => setAdd(add+1)}>Addition</button>
            <span>{add}</span>
            <button onClick={ () => setMinus(minus-1)}>Subtraction</button>
            <span>{minus}</span>

            <h1> Multiplied Add Value (by 10): {multiplication}</h1>

        </>
    )
}

export default Usememo;
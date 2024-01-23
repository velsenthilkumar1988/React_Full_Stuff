import { useState } from "react";
import SubChildComponent from "./SubChildComponent";

const initialStateValue = 100;
//useState effect

function ChildComponent(){
    const [counter, setCounter] = useState(initialStateValue);
    console.log(counter);

    function handleManageCounter(){
        setCounter(counter+1);
    }

    return (
        <div>
            <button onClick={handleManageCounter}>Click</button>
            <p>The Counter Value is {counter}</p>
            <SubChildComponent/>
        </div>
    );
    
}

export default ChildComponent;
import { useState } from "react";
import StudentsPage from "./Students";

function TeachersPage()
{
    const [showStudentNoText, setStudentNoText] = useState(false);
    function HandleToggleTextVal()
    {
        setStudentNoText(!showStudentNoText);
    }
    console.log(showStudentNoText);
    return(
        <div>
            <h3>Teachers List Pages</h3>
            <button onClick={HandleToggleTextVal}>Toggle No. of Student</button>
            <StudentsPage showStudentNoText={showStudentNoText}/>
        </div>
    )
}
export default TeachersPage;
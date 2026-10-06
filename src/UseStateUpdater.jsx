import { useState } from "react"; 
 
function UseStateUpdater() { 
    const [student, setStudent] = useState({ 
        name: "Fayas", 
        age: 20 
    }); 
 
    function birthday() {
     setStudent(student => ({
    ...student,
    age: student.age + 1
}));
    }
 
    return ( 
        <> 
            <h1> 
                {student.name} - {student.age} 
            </h1> 
 
            <button onClick={birthday}> 
                Birthday 
            </button> 
        </> 
    ); 
}
export default UseStateUpdater  
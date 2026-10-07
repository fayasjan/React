import { useEffect } from "react"

function Unmount () {

useEffect(() => {
    console.log("mounting"); 

    return () => {
        console.log("unmounting"); 
    }
}, []);

useEffect(() => {
  const timer = setInterval(() => {
    console.log("Hello");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);


    return (
<h1>hello</h1>
)
}

export default Unmount;
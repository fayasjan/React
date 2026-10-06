import Class from './Class'

function Hello(props) {

   
    

    return (
        <>
            <h1>
                Name: {props.name} <br />
                Age: {props.age}
            </h1>
            <Class again = {props.class} next = {props.class2} />
        </>
    )
}

export default Hello;
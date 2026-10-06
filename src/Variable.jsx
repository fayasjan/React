function variable() {
    let name = "Fayas";
    let age = 20;

    return (
        <h1>
            Student: {name.toUpperCase()} <br />
            Age: {age} <br />
            class: {5 + 5} <br />
            Status: {age >= 18 ? "Adult" : "Minor"} <br />
        </h1>
    );
}

export default variable; 
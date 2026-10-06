import React from 'react'
import Class2 from './Class2';


function Class({ again, next }) {


    return (
        <>

            <div>Class:{again} </div>
            <Class2 next2 = {next} />
        </>
    )
}

export default Class;
import React from 'react';

function EducationExperience(props) {
console.log(props)
    return (
        <div>
            <hr />
            <div>
                <label> Course: </label>
                <input
                    type="text"
                    name="education"
                    title="course"
                    onChange={props.handleChange}
                    id={props.id} 
                    value={props.data.course}
                />
            </div>
            <br />
            <div>
                <label> Institution : </label>
                <input
                    type="text"
                    name="education"
                    title="institution"
                    onChange={props.handleChange}
                    id={props.id} 
                    value={props.data.institution}
                />
            </div>
            <br />
            <div>
                <label> Year: </label>
                <label> from </label>
                <input
                    type="number"
                    name="education"
                    title="fromYear"
                    min="1900"
                    max="2021"
                    onChange={props.handleChange}
                    id={props.id} 
                    value={props.data.fromYear} 
                    />
                <label> to </label>
                <input
                    type="number"
                    name="education"
                    title="toYear"
                    min="1900"
                    max="2021"
                    onChange={props.handleChange}
                    id={props.id}  
                    value={props.data.toYear}
                    />
                <br />
                <br />
                <button
                    name="education"
                    title="delete"
                    id={props.id}>
                        Delete</button>
                <br />
                <br />
            </div>
        </div>
    )
}

export default EducationExperience
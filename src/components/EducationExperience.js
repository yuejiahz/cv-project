import React from 'react';

function EducationExperience(props) {
    return (
        <div>
            <h2>Education Experience</h2>
            <div>
                <label> Course: </label>
                <input type="text" name="education" info="course" onChange={props.handleChange}  id={props.id}/>
            </div>
            <br />
            <div>
                <label> Institution : </label>
                <input type="text" name="education" info="institution" onChange={props.handleChange}  id={props.id}/>
            </div>
            <br />
            <div>
                <label> Year: </label>
                <label> from </label>
                <input type="number" name="education" info="fromYear" min="1900" max="2021" onChange={props.handleChange}  id={props.id}/>
                <label> to </label>
                <input type="number" name="education" info="toYear" min="1900" max="2021" onChange={props.handleChange}  id={props.id}/>
                <br />
                <br />
                <button onClick={props.handleChange} name="education" info="delete" id={props.id}>Delete</button>
                <br />
                <br />
                <button onClick={props.handleChange} name="education" info="add" id={props.id}>Add</button>
            </div>
            <br />
        </div>
    )
}

export default EducationExperience
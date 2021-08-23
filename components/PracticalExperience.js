import React from 'react';

function PracticalExperience(props) {
    return (
        <div>
            <h2>Practical Experience</h2>
            <div>
                <label> Position: </label>
                <input type="text" name="position" onChange={props.handleChange} />
            </div>
            <br />
            <div>
                <label> Company Name : </label>
                <input type="text" name="companyName" onChange={props.handleChange}/>
            </div>
            <br />
            <div>
                <label> Description: </label>
                <textarea name="description" onChange={props.handleChange}/>
            </div>
            <br />
            <div>
                <label> Year: </label>
                <label> from </label>
                <input type="number" min="1900" max="2021" name="fromYear" onChange={props.handleChange}/>
                <label> to </label>
                <input type="number" min="1900" max="2021" name="toYear" onChange={props.handleChange}/>
                <br />
                <br />
                <button onClick={props.handleChange} name="deletePractical">Delete</button>
                <br />
                <br />
                <button onClick={props.handleChange} name="addPractical">Add</button>
            </div>
            <br />
        </div>
    )
}

export default PracticalExperience
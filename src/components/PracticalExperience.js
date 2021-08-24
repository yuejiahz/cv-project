import React from 'react';

function PracticalExperience(props) {
    return (
        <div>
            <hr />
            <div>
                <label> Position: </label>
                <input
                    type="text"
                    name="practical"
                    id={props.id}
                    title="position"
                    onChange={props.handleChange} />
            </div>
            <br />
            <div>
                <label> Company Name : </label>
                <input
                    type="text"
                    name="practical"
                    id={props.id}
                    title="companyName"
                    onChange={props.handleChange} />
            </div>
            <br />
            <div>
                <label> Description: </label>
                <textarea
                    name="practical"
                    id={props.id}
                    title="description"
                    onChange={props.handleChange} />
            </div>
            <br />
            <div>
                <label> Year: </label>
                <label> from </label>
                <input
                    type="number"
                    min="1900"
                    max="2021"
                    name="practical"
                    id={props.id}
                    title="fromYear"
                    onChange={props.handleChange} />
                <label> to </label>
                <input
                    type="number"
                    min="1900"
                    max="2021"
                    name="practical"
                    id={props.id}
                    title="toYear"
                    onChange={props.handleChange} />
                <br />
                <br />
                <button
                    onClick={props.handleChange}
                    name="practical"
                    id={props.id}
                    title="delete">
                    Delete</button>
                <br />
            </div>
            <br />
        </div>
    )
}

export default PracticalExperience
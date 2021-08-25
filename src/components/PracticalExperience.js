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
                    onChange={props.handleChange}
                    value={props.data.position} />
            </div>
            <br />
            <div>
                <label> Company Name : </label>
                <input
                    type="text"
                    name="practical"
                    id={props.id}
                    title="companyName"
                    onChange={props.handleChange}
                    value={props.data.companyName} />
            </div>
            <br />
            <div>
                <label> Description: </label>
                <textarea
                    name="practical"
                    id={props.id}
                    title="description"
                    onChange={props.handleChange}
                    value={props.data.description} />
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
                    onChange={props.handleChange}
                    value={props.data.fromYear} />
                <label> to </label>
                <input
                    type="number"
                    min="1900"
                    max="2021"
                    name="practical"
                    id={props.id}
                    title="toYear"
                    onChange={props.handleChange}
                    value={props.data.toYear} />
                <br />
                <br />
                <button
                    onClick={props.handleChange}
                    name="practical"
                    id={props.id}
                    title="delete"
                    style={{ display: props.stateData.practical.length === 1 ? "none" : "block" }}>
                    Delete
                </button>
                <br />
            </div>
            <br />
        </div>
    )
}

export default PracticalExperience
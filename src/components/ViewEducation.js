import React from 'react';

function ViewEducation(props) {
    const { data } = props
    return (
        <div>
            <div style={{display:"flex"}}>
            <h4>{data.course}</h4>
            <h4>({data.fromYear}-{props.data.toYear})</h4>
            </div>
            <p>{data.institution}</p>
        </div>
    )
}

export default ViewEducation
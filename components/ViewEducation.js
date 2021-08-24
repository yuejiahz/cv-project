import React from 'react';

function ViewEducation(props) {
    const { data } = props
    return (
        <div>
            <div style={{display:"flex"}}>
            <h4 className="education">{data.course}</h4>
            <h4 className="education">({data.fromYear}-{props.data.toYear})</h4>
            </div>
            <p className="education">{data.institution}</p>
        </div>
    )
}

export default ViewEducation
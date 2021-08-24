import React from 'react';

function ViewPractical(props) {
    const { data } = props
    return (
        <div>
            <div style={{display:"flex"}}>
            <h4> {data.position} </h4>
            <h4 
            style={{display: data.fromYear? "block":null }}>
                ({data.fromYear} - {data.toYear})</h4>
            </div>
            <p >{data.company}</p>
            <p>{data.description}</p>
           
        </div>
    )
}

export default ViewPractical
import React from 'react';

function ViewPractical(props) {
    const { data } = props
    return (
        <div>
            <div style={{display:"flex"}}>
            <h4 className="practical"> {data.position} </h4>
            <h4 className="practical" >({data.fromYear} - {data.toYear})</h4>
            </div>
            <p className="practical" >{data.company}</p>
            <p className="practical">{data.description}</p>
           
        </div>
    )
}

export default ViewPractical
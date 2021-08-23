import React from 'react';
import '../style/View.css'

function View(props) {

    return (
        <div className="view-container">
            <header className="resumeHeader">
                <h1 className="headerTitle">{props.data.firstName} {props.data.lastName}</h1>
                <h3 className="headerSubtitle">{props.data.email}</h3>
                <h3 className="headerSubtitle">{props.data.phoneNum}</h3>
            </header>
            <div className="content-container">
                <div className="education-container">
                    <h3>Education Experience</h3>
                    <h4 className="education">{props.data.course}</h4>
                    <p className="education">{props.data.institution}</p>
                    <p className="education">({props.data.fromYear}-{props.data.toYear})</p>
    
                </div>

                <div className="practical-container">
                    <h3>Practical Experience</h3>
                    <h4 className="practical">{props.data.position}</h4>
                    <p className="practical">{props.data.company}</p>
                    <p className="practical">{props.data.description}</p>
                    <p className="practical">({props.data.fromYear}-{props.data.toYear})</p>
    
                </div >
            </div>
        </div >
    )

}

export default View
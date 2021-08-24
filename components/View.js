import React from 'react'
import '../style/View.css'
import ViewEducation from './ViewEducation'
import ViewPractical from './ViewPractical'

function View(props) {
    const { data } = props

    const educationComponents = data.education.map((item) => {
        return <ViewEducation key={Math.floor(Math.random() * 1000)} data={item} />
    })
    const PracticalComponents = data.practical.map((item) => {
        return <ViewPractical key={Math.floor(Math.random() * 1000)} data={item} />
    })

    return (
        <div className="view-container">
            <header className="resumeHeader">
                <h1 className="headerTitle">{data.firstName} {data.lastName}</h1>
                <h3 className="headerSubtitle">{data.email}</h3>
                <h3 className="headerSubtitle">{data.phoneNum}</h3>
            </header>
            <div className="content-container">
                <div className="education-container">
                    <h3>Education Experience</h3>
                    {educationComponents}
                </div>
                <div className="practical-container">
                    <h3>Practical Experience</h3>
                    {PracticalComponents}
                </div >
            </div>
        </div >
    )

}

export default View
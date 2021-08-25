import React from 'react';
import General from './General';
import EducationExperience from './EducationExperience'
import PracticalExperience from './PracticalExperience'
import View from './View'
import dummyInput from "./dummyInput"

let { firstName, lastName, email, phoneNum, education, practical } = dummyInput

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNum: phoneNum,
      education: education,
      practical: practical
    }
    this.handleChange = this.handleChange.bind(this)
    this.addComponent = this.addComponent.bind(this)
    this.deleteComponent = this.deleteComponent.bind(this)
    this.reset = this.reset.bind(this)
  }

  reset(event) {
    event.preventDefault()
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNum: "",
      education: [{
        course: "",
        institution: "",
        fromYear: "",
        toYear: "",
        id: "0"
      }],
      practical: [{
        position: "",
        companyName: "",
        description: "",
        fromYear: "",
        toYear: "",
        id: "0"
      }]
    })
  }

  handleChange(event) {
    const { name, value, title, id } = event.target
    if (name === "education" || name === "practical") {
      let items = (name === "education" ? [...this.state.education] : [...this.state.practical])
      let item = items[id]
      item[title] = value
      items[id] = item
      this.setState({ [name]: items })
    } else {
      this.setState({ [name]: value })
    }
  }

  addComponent(event) {
    event.preventDefault()
    const { name } = event.target
    let educationItem = {
      course: "",
      institution: "",
      fromYear: "",
      toYear: "",
      id: this.state.education.length
    }
    let practicalItem = {
      position: "",
      companyName: "",
      description: "",
      fromYear: "",
      toYear: "",
      id: this.state.practical.length
    }
    let items = (name === "education") ?
      [...this.state.education] : [...this.state.practical]
    let item = (name === "education") ? educationItem : practicalItem
    items = items.concat(item)
    this.setState({ [name]: items })
  }

  deleteComponent(event) {
    event.preventDefault()
    const { name, id } = event.target
    let items = (name === "education") ?
      [...this.state.education] : [...this.state.practical]
    let newId = Number(id)
    console.log(newId)
    const filteredItems = items.filter(item => item.id != newId)
    console.log(filteredItems)
    this.setState({ [name]: filteredItems })
  }

  render() {
    return (
      <main>
        <header><h1>Resume Builder</h1></header>
        <form>
          <General handleChange={this.handleChange} data={this.state} />

          <h2>Education Experience</h2>
          {this.state.education.map((item, index) => {
            return <EducationExperience
              handleChange={this.handleChange}
              deleteComponent={this.deleteComponent}
              data={item}
              stateData={this.state}
              id={index}
              key={index} />
          })}

          <button name="education" title="add" onClick={this.addComponent} >Add</button>
          <br />
          <br />

          <h2>Practical Experience</h2>
          {this.state.practical.map((item, index) => {
            return (
              <PracticalExperience
                handleChange={this.handleChange}
                deleteComponent={this.deleteComponent}
                data={item}
                stateData={this.state}
                id={index}
                key={index} />
            )
          })}
          <button onClick={this.addComponent} name="practical" title="add">Add</button>
          <br />
          <br />
          <button onClick={this.reset}>Reset</button>
        </form>
        <View data={this.state} />
      </main>
    )
  }
}

export default App;
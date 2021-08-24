import React from 'react';
import General from './General';
import EducationExperience from './EducationExperience'
import PracticalExperience from './PracticalExperience'
import View from './View'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "First",
      lastName: "Last",
      email: "hudsan@kkdd.vom",
      phoneNum: "09-82378422",
      education: [{ course: "Sejarah", institution: "SJI", fromYear: "1992", toYear: "1998", id: "0" }],
      practical: [{ position: "Anything", companyName: "DummyCompany", description: "Jobdescrip", fromYear: "1111", toYear: "2222", id: "0" }]
    }
    this.handleChange = this.handleChange.bind(this)
    this.addComponent = this.addComponent.bind(this)
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
    event.preventDefault();
    const { name } = event.target
    let educationItem = { course: "", institution: "", fromYear: "", toYear: "", id: this.state.education.length }
    let practicalItem = { position: "", companyName: "", description: "", fromYear: "", toYear: "", id: this.state.practical.length }
    let items = (name === "education") ? [...this.state.education] : [...this.state.practical]
    let item = (name === "education") ? educationItem : practicalItem
    items = items.concat(item)
    this.setState({
      [name]: items
    })
  }

  
  render() {
    //let id = this.state.education.length-1
    return (
      <main>
        <header><h1>Resume Builder</h1></header>
        <form>
          <General handleChange={this.handleChange} data={this.state} />
          <h2>Education Experience</h2>
          <EducationExperience handleChange={this.handleChange} addComponent={this.addComponent} data={this.state} id="0" />
         
          <button name="education" title="add" onClick={this.addComponent} >Add</button>
          <h2>Practical Experience</h2>
      
          <PracticalExperience handleChange={this.handleChange} addComponent={this.addComponent} data={this.state} id="0" />
          <button onClick={this.addComponent} name="practical" title="add">Add</button>
          <br />
          <br />
          <button>Example Resume</button>
          <button>Reset</button>
        </form>
        <View data={this.state} />
      </main>
    )
  }
}

export default App;
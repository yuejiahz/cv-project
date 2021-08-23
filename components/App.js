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
      education: [],
      practical: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value, info, id } = event.target
  
    this.setState({
            [name]: value
          })
  }

render() {
  return (
    <main>
      <header><h1>Resume Builder</h1></header>
      <form>
        <General handleChange={this.handleChange} data={this.state} />
        <EducationExperience handleChange={this.handleChange} data={this.state} id={this.state.education.length} />
        <PracticalExperience handleChange={this.handleChange} data={this.state} id={this.state.practical.length} />
        <button>Example Resume</button>
      </form>
      <View data={this.state} />
    </main>
  )
}
}

export default App;
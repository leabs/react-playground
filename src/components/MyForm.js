import React from 'react'

export default class MyForm extends React.Component {
  state = {
    name: '',
    favoritePet: '',
    rememberMe: false,
    title: 'Mr.',
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleChangeFavoritePet = (event) => {
    this.setState({ favoritePet: event.target.value })
  }

  handleCheck = (event) => {
    this.setState({ rememberMe: event.target.checked })
  }

  handleSelect = (event) => {
    this.setState({ title: event.target.value })
  }

  handleSubmit = () => {
    console.log(this.state)
    1
  }

  render() {
    return (
      <div>
        <label>Name</label>
        <input value={this.state.name} onChange={this.handleChange} />
        <br />
        <label>Fav Pet</label>
        <textarea
          value={this.state.favoritePet}
          onChange={this.handleChangeFavoritePet}
        />
        <br />
        <label>Checkbox</label>
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleCheck}
        />
        <div>
          <label>Title</label>
          <select value={this.state.title} onChange={this.handleSelect}>
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

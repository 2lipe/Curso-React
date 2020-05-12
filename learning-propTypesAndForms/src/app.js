'use strict'

import React, { Component } from 'react'
import Button from './Button'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'initial value',
      checked: false,
      value: 3
    }
  }

  render () {
    return (
      <div>
        <form>
          <input type='text' value={this.state.value} onChange={(e) => {
            console.log(e)
            this.setState({
              value: e.target.value
            })
          }} />

          <label>
            <input 
              type='checkbox' 
              checked={this.state.checked}
              onChange={(e) => {
                this.setState({ checked: e.target.checked })
              }} />
            Checkbox
          </label>

          <input type='radio' name='rd' value='1' defaultChecked /> Radio 1
          <input type='radio' name='rd' value='2' /> Radio 2
          <tr />
          <select value='3' onChange={(e) => {
            this.setState({ value: e.target.value })
          }} >
            <option value='1' >Opção 1</option>
            <option value='2' >Opção 2</option>
            <option value='3' >Opção 3</option>
          </select>
          <tr />
          <textarea defaultValue={'textarea\nvalue'}/>
          <button type='submit'>Enviar</button>
        </form>
      </div>
    )
  }
}

export default App

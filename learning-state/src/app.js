'use strict'

import React, { Component } from 'react'
import Square from './Square'
import Button from './Button'
import Timer from './Timer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      color: 'black',
      time: 0,
      showTimer: true
    }
  }

  render () {
    return (
      <div>
        <Square color={this.state.color} />

        {['red', 'green', 'blue'].map((color) => (
        <Button 
          key={color} 
          handleClick={() => this.setState({ color })}>
          {color}
        </Button>
        ))}
        {this.state.showTimer && <Timer time={this.state.time} />}
        <button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }} >Show / Hide timer</button>
        <button onClick={() => {
          this.setState({ time: this.state.time + 10 })
        }} >Change props</button>
      </div>
    )
  }
}

export default App

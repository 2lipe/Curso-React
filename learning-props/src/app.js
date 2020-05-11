'use strict'

import React, { Component } from 'react'
import Title from './Title'
import Square from './Square'
import Button from './Button'
import LikeButton from './like-button'
import SearchButton from './search-button'

class App extends Component {
  render () {
    return (
      <div className='container' onClick={(e) => {
          alert('clicou')
        }}>
        <Title name='Hello' lastname='World' />
        {['blue', 'red', 'green'].map((square, index) => (
          <Square key={index} color={square} />
        ))}
        <Button>
          Click
          <span>
            Click 2
          </span>
        </Button>
        <LikeButton />
        <SearchButton />
      </div>
    )
  }
}

/*
const App = React.createClass({
  render: function () {
    return (
      <div>
        <Title name='Felipe' lastname='Vieira' />
      </div>
    )
  }
})
*/

export default App

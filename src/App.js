import React, { Component } from 'react'
import './StickyNotes.scss'
import _ from 'lodash'

class StickyNotes extends Component {
  state = {
    events: [
      { title: 'event1', description: 'description1' },
      { title: 'event2', description: 'description2' }
    ]
  }

  onChangeDescription (event) {
    const { events } = this.state

    var _events = [...events]

    let newDesc = event.target.value

    let eventIndex = event.target.id

    _events[eventIndex].description = newDesc
    this.setState({
      events: _events
    })
  }

  onChangeTitle (event) {
    const { events } = this.state

    var _events = [...events]

    let newTitle = event.target.value

    let eventIndex = event.target.id

    _events[eventIndex].title = newTitle
    this.setState({
      events: _events
    })
  }

  render () {
    return (
      <div>
        <ul className='unordered'>
          {this.state.events.map((row, index) => {
            return (
              <li key={index} className='list'>
                <div className='cover'>
                  <input
                    className='title'
                    id={index}
                    type='text'
                    value={row.title}
                    onChange={this.onChangeTitle.bind(this)}
                  />
                  <input
                    className='p-desc'
                    id={index}
                    type='text'
                    value={row.description}
                    onChange={this.onChangeDescription.bind(this)}
                  />
                  <button
                    className='delete-button'
                    onClick={() => {
                      console.log('delete-button')
                    }}
                  >
                    x
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default StickyNotes

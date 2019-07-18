import React, { Component } from 'react'
import './StickyNotes.scss'

class StickyNotes extends Component {
  state = {
    notes: [
      { title: 'event1', description: 'description1' },
      { title: 'event2', description: 'description2' }
    ],
    currentNote: {}
  }

  onChangeDescription (event) {
    const { notes } = this.state

    let _notes = [...notes]

    let newDesc = event.target.value

    let eventIndex = event.target.id

    _notes[eventIndex].description = newDesc
    this.setState({
      notes: notes
    })
  }

  onChangeTitle (event) {
    const { notes } = this.state

    let _notes = [...notes]

    let newTitle = event.target.value

    let eventIndex = event.target.id

    _notes[eventIndex].title = newTitle
    this.setState({
      notes: _notes
    })
  }

  createTask (event) {
    this.setState({
      currentNote: { title: event.target.value, description: '' }
    })
  }

  addTask () {
    const { notes = [], currentNote = {} } = this.state
    let _notes = [...notes]

    if (currentNote.title) {
      _notes.push(currentNote)
      this.setState({ notes: _notes, currentNote: {} })
    }
  }

  render () {
    const { notes = [] } = this.state

    return (
      <div>
        <ul className='unordered'>
          <input
            onChange={this.createTask.bind(this)}
            type='text'
            className='new-todo'
          />
          <button type='submit' onClick={this.addTask.bind(this)}>
            +
          </button>
          <br />
          <br />
          {notes.map((row, index) => {
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

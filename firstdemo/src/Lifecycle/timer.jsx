import React, { Component } from 'react'

export class timer extends Component {
    constructor(){
        super()
        this.state = {
            time : new Date()
        }
    }
  render() {
    return (
      <div>
 <p>the local time is {this.state.time.toLocaleDateString()}</p>
      </div>
    )
  }
}

export default timer
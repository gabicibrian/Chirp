import React, { Component } from 'react'

export default class fab extends Component {
  render() {
    return (
        <md-fab aria-label="Edit">
            <md-icon slot="icon">edit</md-icon>
        </md-fab>
    )
  }
}

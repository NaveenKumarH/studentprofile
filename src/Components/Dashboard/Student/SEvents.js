import React, { Component } from 'react'

import {connect } from 'react-redux'
import EventSync from './EventSync'

export class SEvents extends Component {
    render() {
        return (
            <div className="container center ">
               
<EventSync></EventSync>
            </div>
        )
    }
}

export default connect()(SEvents)

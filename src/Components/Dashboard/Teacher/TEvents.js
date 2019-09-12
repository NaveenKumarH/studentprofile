import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect } from 'react-redux'
import EventSync from '../Student/EventSync'

export class TEvents extends Component {
    render() {
        return (
            <div className="container center ">
                <div className="btn green "><Link to='/seventadd' className="white-text">Add New</Link></div>
<EventSync></EventSync>
            </div>
        )
    }
}

export default connect()(TEvents)

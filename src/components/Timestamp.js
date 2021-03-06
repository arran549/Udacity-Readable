import React from 'react'
import Moment from 'react-moment'

const Timestamp = ({unixtimestamp}) => <Moment date={new Date(unixtimestamp)} format="ddd DD MMM YYYY @ HH:mm"></Moment>
    
export default Timestamp;
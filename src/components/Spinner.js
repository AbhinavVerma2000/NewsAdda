import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="Loading" style={{height: '5%', width: '5%' }}/>
      </div>
    )
  }
}

export default Spinner

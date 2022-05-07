import React, { Component } from 'react'
import PropTypes from 'prop-types'
import loading from './noimg.png'

export default class Spinner extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
	<img src={loading} alt=""/>
      </div>
    )
  }
}

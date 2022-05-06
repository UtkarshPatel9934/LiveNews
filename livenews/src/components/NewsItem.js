import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  static propTypes = {

  }
// in the class based components we get props by using  "this" keyword.
  render() {

	// this is called destructuring in the Js so that props which gets title and description gets divided and splits the title into the tittle and description into description
	let {title, description} = this.props

    return (

	<>
      <div>
	<div className="card" style={{'width': '18rem'}}>
		<img src="" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{this.props.title}</h5>
				<p className="card-text">{this.props.description}</p>
				<a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
      </div>
      </>
    )
  }
}

export default NewsItem

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  static propTypes = {

  }

// in the class based components we get props by using  "this" keyword.
  render() {

	// this is called destructuring in the Js so that props which gets title and description gets divided and splits the title into the tittle and description into description
	let {title, description, urlToImage, url} = this.props

    return (

	<>
      <div>
	<div className="card" style={{width: "18rem"}}>
		<img src={urlToImage} className="card-img-top" alt="..." urlToImage="https://www.wfsb.com/2022/05/06/entire-state-medium-or-high-category-covid-levels/" />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				<a href={url} className="btn btn-primary">View Detail</a>
			</div>
		</div>
      </div>
      </>
    )
  }
}

export default NewsItem

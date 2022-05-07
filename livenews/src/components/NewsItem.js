import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {
  static propTypes = {
	
  }

// in the class based components we get props by using  "this" keyword.
  render() {

	// this is called destructuring in the Js so that props which gets title and description gets divided and splits the title into the tittle and description into description
	let {title, description, urlToImage, url} = this.props

    return (

	<>
	<div className="card bg-dark text-light" style={{"marginBottom": '20px'}}>
		<img src={urlToImage} style={{"height": "250px"}} className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">{title}...</h5>
				<p className="card-text">{description}....</p>
				<a rel="noreferrer" href={url} target="_blank" className="btn btn-warning text-dark"><strong>View Article</strong></a>
			</div>
		</div>
      </>
    )
  }
}

export default NewsItem

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  static propTypes = {}

  render() {
    return (
	    <>
		<div className='container my-3 text-center'>This is a news component
		<h1>Live News - Breaking news at your finger tips</h1>
		{/* we can siply pass the title and description in it. and it will reflects changes into the NewsItem cards section */}
			<div className="row">
				<div className="col-md-4">
					<NewsItem title="This is 1st title" description="This is my 1st description" />
				</div>
				<div className="col-md-4">
					<NewsItem title="This is 1st title" description="This is my 1st description" />
				</div>
				<div className="col-md-4">
					<NewsItem title="This is 1st title" description="This is my 1st description" />
				</div>
			</div>
		</div>
      	    </>
    )
  }
}

export default News
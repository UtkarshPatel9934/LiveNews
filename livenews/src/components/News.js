// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import Spinner from './Spinner';


import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
	  country: 'in',
	  pageSize: 8,
	  category: "general"
  }

  // add the datatypes required for the pops

  static propTypes = {
	  country: PropTypes.string,
	  pageSize: PropTypes.number,
	  category: PropTypes.string
  }


  constructor(){
	super(); // this is compulsory to run the app if we are using constructor

	// creating the state
	this.state = {

		// access the json file
		articles: [],
		loading: false,
		country: 'ca',
		page: 1
	}

	// to set the state in the class based components we used :  this.setState({
	// articles: newArticle
	//})

	// for accessing the articles: we use: this.state.articles
}



changeToUS = async() =>{
	let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=67cd1a47fa044434bde495a09c290d2d&${this.state.page}&pageSize=${this.props.pageSize}`;
	let data = await fetch(url);
	let parseData = await data.json()
	this.setState({
		country: 'us',
		articles: parseData.articles,
	})
}
changeToCA = async() =>{
	let url = `https://newsapi.org/v2/top-headlines?country=ca&apiKey=67cd1a47fa044434bde495a09c290d2d&${this.state.page}&pageSize=${this.props.pageSize}`;
	let data = await fetch(url);
	let parseData = await data.json()
	this.setState({
		country: 'ca',
		articles: parseData.articles,
	})
}
changeToIN = async() =>{
	let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=67cd1a47fa044434bde495a09c290d2d&${this.state.page}&pageSize=${this.props.pageSize}`;
	let data = await fetch(url);
	let parseData = await data.json()
	this.setState({
		country: 'in',
		articles: parseData.articles,
	})
}

/* is used to fetch data from API */

// this runs after the reder method ....
async componentDidMount(){

	// Fetching the Data from the API - Code With Harry 
	let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=67cd1a47fa044434bde495a09c290d2d&page=1&pageSize=${this.props.pageSize}`;
	// let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=67cd1a47fa044434bde495a09c290d2d&page=1&pageSize=${this.props.pageSize}`;
	this.setState({
		loading: true
	})
	let data = await fetch(url);
	let parseData = await data.json()
	this.setState({
		loading: false,
		articles: parseData.articles,
		totalResults: parseData.totalResults
	});

}


handlePreviousClick = async ()=>{

	let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=67cd1a47fa044434bde495a09c290d2d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
	// let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=67cd1a47fa044434bde495a09c290d2d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
	this.setState({
		loading: true
	})
	let data = await fetch(url);
	let parseData = await data.json()
	this.setState({
		loading: true,
		page: this.state.page - 1,
		articles: parseData.articles,
	})

	window.scrollTo({ top: 0, behavior: 'smooth' });
}
handleNextClick = async ()=>{
	if(!(this.state.page + 1 > (Math.ceil(this.state.totalResults/this.props.pageSize))))
	{
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=67cd1a47fa044434bde495a09c290d2d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
		// let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=67cd1a47fa044434bde495a09c290d2d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

		// set the state for the loading
		this.setState({
			loading: true
		})
		
		let data = await fetch(url);
		let parseData = await data.json()
		
		// after the parsing process it will be disabled
		this.setState({
			loading: true,
			page: this.state.page + 1,
			articles: parseData.articles,
		})
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
}



// we can access props using this.props

render() {
    return (
	    <>
		<div className='container my-3 mt-5 text-center'>
		<h1 className='text-info'><strong>Live News - Breaking news at your finger tips</strong></h1>
		{/* we can siply pass the title and description in it. and it will reflects changes into the NewsItem cards section */}

		</div>
		<hr style={{'border': '2px solid white'}} />

		{/* {this.state.loading && <Spinner />} */}

		{/* looping through the array */}

		<div className="container">

			{/* Country Filter buttons */}
			<div className="container m-3">
				<h4> <strong className='text-primary'>Note:</strong> <i className='text-light'>Click the tab to change the news specific to Country</i></h4>
				<h5 className='text-primary'><strong className='text-danger'>Default is Canada</strong> <span className='text-light'>|</span> <strong>Selected Country is: </strong><strong className='text-light'>{this.state.country === null ? 'Canada' : this.state.country}</strong></h5>
				<button type="button" className="btn btn-success m-2" onClick={this.changeToUS}><strong>United States</strong></button>
				<button type="button" className="btn btn-danger m-2"  onClick={this.changeToCA}><strong>Canada</strong></button>
				<button type="button" className="btn btn-warning m-2"  onClick={this.changeToIN}><strong>India</strong></button>
			</div>
			{/* Country Filter buttons */}


			<hr style={{'border': '2px solid white'}} />

			<div className="row">
				 {/* {!this.state.loading && this.state.articles.map(ele => { */}
				 {this.state.articles.map(ele => {
				return	<div className="col-md-4" key={ele.url}>
						<NewsItem title={ele.title.slice(0,45)} description={ele.description !== null ? ele.description.slice(0,88) : "Description doesn't available for this news"} urlToImage={ele.urlToImage !== null ? ele.urlToImage : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} url={ele.url} author={ele.author !== null ? ele.author: 'Author Info Not Avalilabe'} date={ele.publishedAt} source={ele.source.name}/>
					</div>
				})}
				
			</div>
			
			<hr style={{'border': '2px solid white'}} />

			{/* Previou/Next buttons */}
			<div className="d-flex justify-content-between">
				<button disabled={this.state.page <= 1} type="button" className="btn btn-primary m-2"  onClick={this.handlePreviousClick}>&#8592; Previous</button>
				<button disabled={this.state.page + 1 > (Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-primary m-2"  onClick={this.handleNextClick}>Next &#8594;</button>
			</div>
			{/* Previou/Next buttons */}
		</div>
      	    </>
    )
  }
}

export default News
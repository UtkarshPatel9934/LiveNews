// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
  static propTypes = {}


  constructor(){
	super(); // this is compulsory to run the app if we are using constructor

	// creating the state
	this.state = {

		// access the json file
		articles: [],
		loading: false,
		country: null
	}

	// to set the state in the class based components we used :  this.setState({
	// articles: newArticle
	//})

	// for accessing the articles: we use: this.state.articles
}



changeToUS = (Us) =>{
	this.componentDidMount()
	{
		fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=67cd1a47fa044434bde495a09c290d2d`)
	// is a promise to convert the data in to text or json format
	.then((dataFromUrl) => dataFromUrl.json())
	.then((jsonData_Returned) => {
		// console.log(jsonData_Returned)
				this.setState({
					articles: jsonData_Returned.articles,
					country: 'United States'
				});
			})
	}
	// this.setState({
	// 	country: 'us'
	// });
}
changeToCA = (Ca) =>{
	this.componentDidMount()
	{
		fetch(`https://newsapi.org/v2/top-headlines?country=ca&apiKey=67cd1a47fa044434bde495a09c290d2d`)
	// is a promise to convert the data in to text or json format
	.then((dataFromUrl) => dataFromUrl.json())
	.then((jsonData_Returned) => {
		// console.log(jsonData_Returned)
				this.setState({
					articles: jsonData_Returned.articles,
					country: 'Canada'
				});
			})
	}
}
changeToIN = (In) =>{
	this.componentDidMount()
	{
		fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=67cd1a47fa044434bde495a09c290d2d`)
	// is a promise to convert the data in to text or json format
	.then((dataFromUrl) => dataFromUrl.json())
	.then((jsonData_Returned) => {
		// console.log(jsonData_Returned)
				this.setState({
					articles: jsonData_Returned.articles,
					country: 'India'
				});
			})
	}
}

/* is used to fetch data from API */

// this runs after the reder method ....
componentDidMount(){

	// news fetching url
	// let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=67cd1a47fa044434bde495a09c290d2d`;

	// fetch is an async frunction till some promises resolves....
	// let data = await fetch(url);
	
	// let parseData = await data.json()
	
	
	// fetching the data in the url
	fetch(`https://newsapi.org/v2/top-headlines?country=ca&apiKey=67cd1a47fa044434bde495a09c290d2d`)
	// is a promise to convert the data in to text or json format
	.then((dataFromUrl) => dataFromUrl.json())
	.then((jsonData_Returned) => {
		// console.log(jsonData_Returned)
				this.setState({
					articles: jsonData_Returned.articles,
				});
			})
}

  render() {
    return (
	    <>
		<div className='container my-3 mt-5 text-center'>
		<h2 className='text-info'>Live News - Breaking news at your finger tips</h2>
		{/* we can siply pass the title and description in it. and it will reflects changes into the NewsItem cards section */}

		</div>
		<hr />

		{/* looping through the array */}

		<div className="container">
			<div className="container m-3">
				<h4> <strong className='text-info'>Note:</strong> <i className='text-warning'>Click the tab to change the news specific to Country</i> | <strong className='text-danger'>Default is Canada</strong></h4>
				<h5 className='text-primary'>Selected Country is: {this.state.country === null ? 'Canada' : this.state.country}</h5>
				<button type="button" className="btn btn-success m-2" onClick={this.changeToUS}>United States</button>
				<button type="button" className="btn btn-danger m-2"  onClick={this.changeToCA}>Canada</button>
				<button type="button" className="btn btn-warning m-2"  onClick={this.changeToIN}>India</button>
			</div>
			<div className="row">
				 {this.state.articles.map(ele => {
				return	<div className="col-md-4" key={ele.url}>
						<NewsItem title={ele.title.slice(0,45)} description={ele.description !== null ? ele.description.slice(0,88) : "Description doesn't available for this news"} urlToImage={ele.urlToImage !== null ? ele.urlToImage : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} url={ele.url}/>
					</div>
				})}
				
			</div>
			<hr />
		</div>
      	    </>
    )
  }
}

export default News
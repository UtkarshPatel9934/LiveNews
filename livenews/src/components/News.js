import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  static propTypes = {}



  // get the json file
  articles = {
	  "articles": [
		  {
			  "source": {
				  "id": null,
				  "name": "New York Times"
			  },
			  "author": "Marc Santora, Dan Bilefsky",
			  "title": "Latest Russia-Ukraine War News: Live Updates - The New York Times",
			  "description": "The Ukrainian military took the offensive as the two sides battle for control of the east. In the south, an evacuation convoy was dispatched to rescue civilians from the besieged steel plant in Mariupol.",
			  "url": "https://www.nytimes.com/live/2022/05/06/world/ukraine-russia-war-news",
			  "urlToImage": "https://static01.nyt.com/images/2022/05/06/multimedia/06ukraine-blog-promo-1pm/06ukraine-blog-promo-1pm-facebookJumbo.jpg",
			  "publishedAt": "2022-05-06T16:27:55Z",
			  "content": "WASHINGTON The United States provided intelligence that helped Ukrainian forces locate and strike the flagship of Russias Black Sea fleet last month, another sign that the administration is easing it… [+8600 chars]"
		  },
		  {
			  "source": {
				  "id": "the-washington-post",
				  "name": "The Washington Post"
			  },
			  "author": "Abha Bhattarai",
			  "title": "April jobs report remained steady at 3.6 percent - The Washington Post",
			  "description": "The job market’s rapid rebound has been a cornerstone of the pandemic recovery and a major political asset for the Biden administration.",
			  "url": "https://www.washingtonpost.com/business/2022/05/06/jobs-report-april/",
			  "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DKWOCQGLVUI6ZN7OOTYJ3AT4UY.jpg&w=1440",
			  "publishedAt": "2022-05-06T16:25:13Z",
			  "content": "Placeholder while article actions load\r\nU.S. employers added 428,000 jobs in April, capping a year of solid growth, adding more fuel to an already robust recovery. The unemployment rate remained stea… [+6083 chars]"
		  },
		  {
			  "source": {
				  "id": "cnn",
				  "name": "CNN"
			  },
			  "author": "Luke McGee, CNN",
			  "title": "Putin's reputed girlfriend Alina Kabaeva included in proposed EU sanctions list, sources say - CNN",
			  "description": "Alina Kabaeva, a woman who has been romantically linked to Russian President Vladimir Putin, is included in the sixth proposed package of European Union sanctions against Russia over its invasion of Ukraine, according to two European diplomatic sources.",
			  "url": "https://www.cnn.com/2022/05/06/europe/putins-reputed-girlfriend-alina-kabaeva-eu-sanctions-intl/index.html",
			  "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220506054733-alina-kabaeva-file-09272011-super-tease.jpg",
			  "publishedAt": "2022-05-06T16:03:00Z",
			  "content": "(CNN)Alina Kabaeva, a woman who has been romantically linked to Russian President Vladimir Putin, is included in the sixth proposed package of European Union sanctions against Russia over its invasio… [+3499 chars]"
		  },
		  {
			  "source": {
				  "id": null,
				  "name": "The Guardian"
			  },
			  "author": "Jessica Glenza",
			  "title": "‘A severe chilling effect’: abortion bans will inhibit doctors’ advice to patients, experts fear - The Guardian",
			  "description": "Extreme restrictions combined with tough-on-crime laws could put medical professionals in severe legal jeopardy",
			  "url": "https://amp.theguardian.com/world/2022/may/06/abortion-bans-patient-doctor-medical-advice",
			  "urlToImage": "https://i.guim.co.uk/img/media/98b8bc25b18ba920e1810cb1af301010724d5e3f/0_146_4400_2642/master/4400.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a741b27430e64034aa4c020e5fa9b685",
			  "publishedAt": "2022-05-06T16:02:00Z",
			  "content": "The end of a federal right to abortion in the US would have profound and detrimental impacts on medical education, the freedom to practice medicine and patients ability to seek medical advice without… [+6803 chars]"
		  },
		  {
			  "source": {
				  "id": "the-verge",
				  "name": "The Verge"
			  },
			  "author": "Chris Welch",
			  "title": "Sennheiser Momentum True Wireless 3 review: more for your money - The Verge",
			  "description": "Same sound, more features, less money.",
			  "url": "https://www.theverge.com/23059336/sennheiser-momentum-true-wireless-3-earbuds-review",
			  "urlToImage": "https://cdn.vox-cdn.com/thumbor/T24vg91D93poxnb0hkGn0deTgzY=/0x279:2040x1347/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23441367/sennheiser.jpg",
			  "publishedAt": "2022-05-06T15:45:00Z",
			  "content": "If you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.Sennheisers new Momentum True Wireless 3s are the companys latest flagship earbuds. With a more refin… [+8693 chars]"
		  },
		  {
			  "source": {
				  "id": "the-washington-post",
				  "name": "The Washington Post"
			  },
			  "author": "Timothy Bella",
			  "title": "Man accused of killing his wife wins GOP primary from jail - The Washington Post",
			  "description": "Andrew Wilhoite, an Indiana man who was charged in March with killing his wife, Elizabeth “Nikki” Wilhoite, won his GOP primary for a township board seat this week from jail.",
			  "url": "https://www.washingtonpost.com/politics/2022/05/06/indiana-gop-murder-andrew-wilhoite/",
			  "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FE6J4EG3ANETRMMQH5CAKMVK5A.png&w=1440",
			  "publishedAt": "2022-05-06T15:29:49Z",
			  "content": "Placeholder while article actions load\r\nAn Indiana man who is accused of killing his cancer-stricken wife as she was seeking a divorce won his GOP primary this week from jail and will be on the ballo… [+6483 chars]"
		  },
		  {
			  "source": {
				  "id": null,
				  "name": "CNBC"
			  },
			  "author": "Jennifer Liu",
			  "title": "New White House press secretary Karine Jean-Pierre is making history - CNBC",
			  "description": "Incoming White House press secretary Karine Jean-Pierre will take over daily White House press briefings after Jen Psaki departs on May 13.",
			  "url": "https://www.cnbc.com/2022/05/06/new-white-house-press-secretary-karine-jean-pierre-is-making-history.html",
			  "urlToImage": "https://image.cnbcfm.com/api/v1/image/107057186-1651843218742-gettyimages-1395609822-107a9000_1decf3ae-8f5c-4bfb-9aa4-e8fb7681f656.jpeg?v=1651843294&w=1920&h=1080",
			  "publishedAt": "2022-05-06T14:55:06Z",
			  "content": "The White House press secretary job has existed for 93 years and for the first time, it'll soon be held by someone who isn't white.\r\nKarine Jean-Pierre has been named the Biden administration's new W… [+3948 chars]"
		  },
		  {
			  "source": {
				  "id": null,
				  "name": "Hollywood Reporter"
			  },
			  "author": "Abid Rahman",
			  "title": "Dave Chappelle Provides New Details of Attack at Secret Stand-Up Show, Joined By Chris Rock Onstage - Hollywood Reporter",
			  "description": "Two nights after a man attacked him onstage at the Hollywood Bowl, Dave Chappelle addressed the incident at a secret comedy show in Los Angeles on Thursday. The comedian performed at the Comedy Store in the club’s 70-seat Belly Room. Although Chappelle’s appe…",
			  "url": "https://www.hollywoodreporter.com/news/general-news/dave-chappelle-attack-secret-stand-up-show-1235141753/",
			  "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2022/05/GettyImages-1347132169.jpeg?w=1024",
			  "publishedAt": "2022-05-06T14:46:54Z",
			  "content": "Two nights after a man attacked him onstage at the Hollywood Bowl, Dave Chappelle addressed the incident at a secret comedy show in Los Angeles on Thursday.\r\nThe comedian performed at the Comedy Stor… [+3255 chars]"
		  },
		  {
			  "source": {
				  "id": "cnn",
				  "name": "CNN"
			  },
			  "author": "Radina Gigova, Tara John and Anna Chernova, CNN",
			  "title": "Belarus jails student a year after forcing down the airliner she was traveling on - CNN",
			  "description": "Sofia Sapega, a Russian citizen who was arrested with her Belarusian dissident boyfriend last year when Belarus forced the landing of a Ryanair passenger jet, has been sentenced to six years in prison, Russian state news agency TASS reports.",
			  "url": "https://www.cnn.com/2022/05/06/europe/belarus-ryanair-sentence-sofia-sapega-intl/index.html",
			  "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220506082155-sofia-sapega-hearing-0506-super-tease.jpg",
			  "publishedAt": "2022-05-06T14:33:00Z",
			  "content": "(CNN)Sofia Sapega, a Russian law student arrested with her Belarusian dissident boyfriend last year when Belarus forced a Ryanair airliner to land, was sentenced Friday to six years in prison for inc… [+2448 chars]"
		  },
		  {
			  "source": {
				  "id": "cnn",
				  "name": "CNN"
			  },
			  "author": "Jackie Wattles, CNN Business",
			  "title": "SpaceX's wildly busy year continues with astronaut splashdown - CNN",
			  "description": "Three NASA astronauts and a European astronaut splashed down aboard their SpaceX Crew Dragon capsule off the coast of Florida after midnight Friday morning, capping off their six-month mission during which they worked alongside Russian cosmonauts and hosted t…",
			  "url": "https://www.cnn.com/2022/05/06/tech/spacex-crew-3-nasa-splashdown-scn/index.html",
			  "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220506004631-01-spacex-crew3-splashdown-0506-super-tease.jpg",
			  "publishedAt": "2022-05-06T14:30:00Z",
			  "content": "New York (CNN Business)Three NASA astronauts and a European astronaut splashed down aboard their SpaceX Crew Dragon capsule off the coast of Florida after midnight Friday morning, capping off their s… [+2469 chars]"
		  },
		  {
			  "source": {
				  "id": "cnn",
				  "name": "CNN"
			  },
			  "author": "Elizabeth Wolfe, Amara Walker, Jade Gordon, Holly Yan, Jamiel Lynch",
			  "title": "An Alabama corrections officer sold her home days before she disappeared with an inmate. Now investigators suspect a romantic relationship - CNN",
			  "description": "Extra food in his trays. Special privileges that other inmates didn't get. These are some of new clues that support beliefs that an Alabama corrections official and a murder suspect had a romantic relationship before both disappeared, a sheriff says.",
			  "url": "https://www.cnn.com/2022/05/04/us/alabama-vicky-white-casey-white-search-wednesday/index.html",
			  "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220501071557-vicki-white-casey-white.jpg?c=16x9&q=w_800,c_fill",
			  "publishedAt": "2022-05-06T14:28:00Z",
			  "content": "Extra food. Special privileges that other inmates didnt get. \r\nThose are some of the clues that support the belief that Alabama corrections official Vicky White and murder suspect Casey White had a r… [+6859 chars]"
		  },
		  {
			  "source": {
				  "id": null,
				  "name": "CNBC"
			  },
			  "author": "Lauren Thomas",
			  "title": "Wedding costs surge as pent-up demand, inflation force couples to cut - CNBC",
			  "description": "Couples are getting creative to save money, while wedding vendors continue to face supply chain headwinds leading to shortages.",
			  "url": "https://www.cnbc.com/2022/05/06/wedding-costs-surge-as-pent-up-demand-inflation-force-couples-to-cut.html",
			  "urlToImage": "https://image.cnbcfm.com/api/v1/image/107055751-1651665916213-Nicole__Adam.jpg?v=1651686715&w=1920&h=1080",
			  "publishedAt": "2022-05-06T14:22:01Z",
			  "content": "Nicole Brandfon and her fiance Adam Alonso are planning a wedding in Colombia, rather than Miami, because it was more affordable.\r\nNicole Brandfon and her fiance, Adam Alonso, will hop on a plane fro… [+9608 chars]"
		  },
		  {
			  "source": {
				  "id": null,
				  "name": "TMZ"
			  },
			  "author": "TMZ Staff",
			  "title": "Queen Elizabeth Will Not Allow Harry, Meghan or Andrew on Balcony for Jubilee - TMZ",
			  "description": "Prince William may have just extended an olive branch to Prince Harry and Meghan, but the Queen has just done the opposite ... snubbing her grandson, his wife and one of her sons.",
			  "url": "https://www.tmz.com/2022/05/06/queen-elizabeth-will-not-allow-harry-meghan-andrew-on-balcony-jubilee/",
			  "urlToImage": "https://imagez.tmz.com/image/a2/16by9/2022/05/06/a21c06dfe1ab4a3ca107b6962e606e98_xl.jpg",
			  "publishedAt": "2022-05-06T14:05:00Z",
			  "content": "Prince William may have just extended an olive branch to Prince Harry and Meghan, but the Queen has just done the opposite ... snubbing her grandson, his wife and one of her sons.\r\nThe Palace just re… [+1195 chars]"
		  },
		  {
			  "source": {
				  "id": "cnn",
				  "name": "CNN"
			  },
			  "author": "Ashley Strickland, CNN",
			  "title": "Listen to eerie sounds from echoing black holes - CNN",
			  "description": "Millions of elusive black holes hide in plain sight across the Milky Way galaxy. Astronomers are using the X-ray echoes released by these extreme cosmic objects to find them -- and they make some eerie sounds in the process.",
			  "url": "https://www.cnn.com/2022/05/06/world/black-hole-echo-sounds-scn/index.html",
			  "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220505153003-black-hole-binary-system-super-tease.jpg",
			  "publishedAt": "2022-05-06T14:03:00Z",
			  "content": null
		  },
		  {
			  "source": {
				  "id": "google-news",
				  "name": "Google News"
			  },
			  "author": null,
			  "title": "Dow Jones Dives 500 Points After Jobs Report As Treasury Yields Hit New High - Investor's Business Daily",
			  "description": null,
			  "url": "https://news.google.com/__i/rss/rd/articles/CBMiiQFodHRwczovL3d3dy5pbnZlc3RvcnMuY29tL21hcmtldC10cmVuZC9zdG9jay1tYXJrZXQtdG9kYXkvZG93LWpvbmVzLWZ1dHVyZXMtZmFsbC1haGVhZC1vZi1rZXktYXByaWwtam9icy1yZXBvcnQtc3F1YXJlLWp1bXBzLW9uLWVhcm5pbmdzL9IBAA?oc=5",
			  "urlToImage": null,
			  "publishedAt": "2022-05-06T13:59:00Z",
			  "content": null
		  },
		  {
			  "source": {
				  "id": null,
				  "name": "ESPN"
			  },
			  "author": null,
			  "title": "WNBA 2022 preseason predictions and biggest storylines to watch this season - ESPN",
			  "description": "Before the season tips Friday, our panel debates which team starts as the favorite, who will win MVP and what to make of recent high-profile roster cuts.",
			  "url": "https://www.espn.com/wnba/story/_/id/33863769/wnba-2022-preseason-predictions-biggest-storylines-watch-season",
			  "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0506%2Fr1009000_1296x729_16%2D9.jpg",
			  "publishedAt": "2022-05-06T13:04:25Z",
			  "content": "The WNBA's 26th season begins this weekend with hearts and minds on one player who won't be in uniform: Phoenix Mercury center Brittney Griner, who has been detained in Russia since February. The Mer… [+13024 chars]"
		  },
		  {
			  "source": {
				  "id": "engadget",
				  "name": "Engadget"
			  },
			  "author": "https://www.engadget.com/about/editors/james-trew",
			  "title": "How Gen Z is pushing NES Tetris to its limits - Engadget",
			  "description": "For decades we all played Tetris the same way.",
			  "url": "https://www.engadget.com/teens-tetris-and-rolling-130002013.html",
			  "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-05/1f4b9b70-cc88-11ec-b5f7-8b621768a414",
			  "publishedAt": "2022-05-06T13:00:03Z",
			  "content": "Classic Tetris usually refers to the NES port of the game. Its considered the gold standard original and is the version played in the CTWC tournaments. This means original NES consoles, controllers a… [+11227 chars]"
		  },
		  {
			  "source": {
				  "id": null,
				  "name": "WFSB"
			  },
			  "author": "Rob Polansky",
			  "title": "Entire state in medium or high category for COVID levels - Eyewitness News 3",
			  "description": "All eight Connecticut counties are either in the medium or high categories when it comes to COVID-19 community levels.",
			  "url": "https://www.wfsb.com/2022/05/06/entire-state-medium-or-high-category-covid-levels/",
			  "urlToImage": "https://gray-wfsb-prod.cdn.arcpublishing.com/resizer/X1BVtDw-fX41hqeGoaTScsvz4Ek=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/PUJS4HYFXFFPBDMAX4N3D3T5KY.JPG",
			  "publishedAt": "2022-05-06T12:58:00Z",
			  "content": "HARTFORD, Conn. (WFSB) - All eight Connecticut counties are either in the medium or high categories when it comes to COVID-19 community levels.\r\nThe Centers for Disease Control and Prevention updated… [+2153 chars]"
		  },
		  {
			  "source": {
				  "id": null,
				  "name": "New York Times"
			  },
			  "author": "Victor Mather",
			  "title": "Shohei Ohtani Borrows From Fiction Against Red Sox at Fenway - The New York Times",
			  "description": "The Angels’ two-way star dominated on the mound and knocked his own number off the scoreboard with a line drive. All in a day’s work.",
			  "url": "https://www.nytimes.com/2022/05/06/sports/baseball/shohei-ohtani-angels-red-sox-fenway.html",
			  "urlToImage": "https://static01.nyt.com/images/2022/05/05/multimedia/05mlb-mets-angels/05mlb-mets-angels-facebookJumbo-v2.jpg",
			  "publishedAt": "2022-05-06T12:55:04Z",
			  "content": "Ohtani, who won the American Leagues Most Valuable Player Award last year thanks to his two-way brilliance, is off to a bit of a slow start in the seasons first 26 games. He is hitting .240 with four… [+926 chars]"
		  },
		  {
			  "source": {
				  "id": "business-insider",
				  "name": "Business Insider"
			  },
			  "author": "Tim Levin, Graham Rapier",
			  "title": "Crypto CEO invested with Elon Musk in Twitter without business plan - Business Insider",
			  "description": "\"It's more of a blank check,\" Binance CEO Changpeng Zhao said. \"After the investment  ...  Elon will figure out what he wants to do.\"",
			  "url": "https://www.businessinsider.com/elon-musk-twitter-deal-binance-ceo-investment-business-plan-crypto-2022-5",
			  "urlToImage": "https://i.insider.com/6275262794a2c10018ee4532?width=1200&format=jpeg",
			  "publishedAt": "2022-05-06T12:08:36Z",
			  "content": "Binance, the world's largest cryptocurrency exchange, is investing $500 million as part of Elon Musk's deal to take Twitter private.\r\nThat sum is simply a blank check, CEO Changpeng Zhao told the Fin… [+1984 chars]"
		  }
	  ],
	  loading: false
  }


  constructor(){
	super(); // this is compulsory to run the app if we are using constructor
	console.log('hello its constructor from news component:')





	// creating the state
	this.state = {

		// access the json file
		articles: this.articles
	}

	// to set the state in the class based components we used :  this.setState({
	// articles: newArticle
	//})
}

  render() {
    return (
	    <>
		<div className='container my-3 mt-5'>This is a news component
		<h1>Live News - Breaking news at your finger tips</h1>
		{/* we can siply pass the title and description in it. and it will reflects changes into the NewsItem cards section */}
			<div className="row mt-5">
				<div className="col-md-4">
					<NewsItem title="Entire state in medium or high category for COVID levels - Eyewitness News 3" description="All eight Connecticut counties are either in the medium or high categories when it comes to COVID-19 community levels." urlToImage="https://gray-wfsb-prod.cdn.arcpublishing.com/resizer/X1BVtDw-fX41hqeGoaTScsvz4Ek=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/PUJS4HYFXFFPBDMAX4N3D3T5KY.JPG" url="https://www.wfsb.com/2022/05/06/entire-state-medium-or-high-category-covid-levels/"/>
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
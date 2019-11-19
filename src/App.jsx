import React, { Component } from 'react';
import Header from './components/Header';
import ListNews from './components/ListNews';
import Form from './components/formulario/Form';
import './index.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			news: [],
			category: 'bitcoin'
		};
	}

	componentDidMount() {
		this.getNews();
	}

	handleSelect = input => event => {
		this.setState({
			category: event.target.value
		});
		setTimeout(() => {
			this.getNews(this.state.category);
		}, 500);
	}

	getNews = async () => {
		const url = `https://newsapi.org/v2/everything?q=${this.state.category}&from=2019-10-18&sortBy=publishedAt&apiKey=3c2269efe72644e7a8ef25e33204fe67`;
		const resp = await fetch(url);
		const news = await resp.json();
		this.setState({
			news: news.articles,
		});
	};

	render() {
		let { news } = this.state;
		return (
			<React.Fragment>
				<Header title="Noticias React API"></Header>

				<div className="container">
					<div className="card shadows">
						<Form
							handleSelect={this.handleSelect}
						/>
						<ListNews
							news={news}
						/>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

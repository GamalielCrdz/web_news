import React, { Component } from 'react';
import { StyledHome } from './home.style';
import Navbar from "../Components/navbar";
import SearchBar from "../Components/searchbar";
import actions from "../redux/actions";
import { Card, Modal, Icon } from "antd";
import { connect } from 'react-redux';

const { searchNews, setNews } = actions;

class News extends Component {

	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			articleItem: {}
		}
	}

	componentDidMount() {
		this.props.searchNews(false, "us");
	}

	openModal = (id) => {
		const articleItem = this.props.news.find(article => article._id === id);
		this.setState({
			visible: true,
			articleItem
		});
	}

	closeModal = () => {
		this.setState({
			visible: false
		});
	}

	removeItem = (id) => {
		const news = this.props.news.filter(article => article._id !== id);
		this.props.setNews(news);
	}

	render() {
		return (
			<React.Fragment>
				<Navbar />
				<StyledHome>
					<SearchBar searchNews={this.props.searchNews} />
					{
						this.props.news.map((article, index) => (
							<div className="news-item" key={`article-${index}`}>
								<Icon onClick={() => {this.removeItem(article._id)}} className="close-icon" type="close-square" theme="filled" />
								<img src={article.urlToImage} alt="news" />
								<Card
									title={
										<div style={{ whiteSpace: "normal" }} >
											{article.title}
											<div style={{ color: 'gray', fontWeight: 'normal' }} >
												{article.author} - {new Date(article.publishedAt).toDateString()}
											</div>
										</div>
									}
									onClick={() => { this.openModal(article._id) }}
									className="card" >
									<p>{article.description}</p>
								</Card>
							</div>
						))
					}
					{
						this.props.news.length <= 0 &&
						<div className="no-results" >
							<h1>Without results</h1>
						</div>
					}
				</StyledHome>
				<Modal
					title={this.state.articleItem.title}
					visible={this.state.visible}
					onOk={this.closeModal}
					onCancel={this.closeModal}
				>
					<p>{this.state.articleItem.description}</p>
					<p>{this.state.articleItem.content}</p>
					<a href={this.state.articleItem.url} target='_blank' rel="noopener noreferrer" >View source</a>
				</Modal>
			</React.Fragment>
		);
	}
}

export default connect(
	(state) => (state),
	{
		searchNews,
		setNews
	}
)(News)
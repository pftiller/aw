import React, { Component } from 'react';
import App from './App';
import ContentBlock from '../../utilities/ContentBlock';

class Home extends Component {

	render() {

		if (this.props.data) {

			const data = this.props.data;

			return (
				<article className="home">
					<h1>{data.title.rendered}</h1>
					<App />
					<ContentBlock content={data.content.rendered} />
				</article>
			);
		}

		return null;
	};
};

export default Home;
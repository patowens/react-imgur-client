var React = require('react');
var Header = require('./header');
var TopicList = require('./topic-list');
var Footer = require('./footer');

module.exports = React.createClass({
	render: function() {
		return <div>
			<Header />
			{this.content()}
			<Footer />
		</div>
	},
	content: function() {
		if(this.props.children) {
			return this.props.children
		} else {
			return <TopicList />
		}
	}
});
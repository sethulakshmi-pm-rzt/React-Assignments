import React from 'react';
import PropTypes from 'prop-types';


class Header extends React.Component {
	render () {
		return (<h1 className = "header">{this.props.headData}</h1>);
	}
}

export default Header
import React, {Component} from 'react';
import {
	View,
	Text,
	Image,
	StatusBar
} from 'react-native';
import styles from './styles';

class Splash extends Component {
	constructor(props) {
		super(props);

		this.nextPage = this.nextPage.bind(this);
	}

	componentWillMount() {
		this.splashTime = setTimeout(() => {
			this.nextPage();
		}, 5000);
	}

	nextPage() {
		this.props.navigator.replace({
			title: "Login",
		});
		clearTimeout(this.splashTime);
	}

	render() {
		return (
			<View style={styles.splashWrap}>
				<StatusBar backgroundColor='#DF3A01' />
				<Image style={styles.splashImage} source={require('../../images/splash.jpg')} />
			</View>
		);
	}
}

export default Splash;
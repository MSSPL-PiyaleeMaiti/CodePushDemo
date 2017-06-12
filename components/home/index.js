import React, {Component} from 'react';
import {
	View,
	Text,
	TextInput,
	StatusBar,
	Image,
	Button,
} from 'react-native';
import styles from './styles';

class Home extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<View style={styles.loginWrap}>
				<StatusBar backgroundColor='#DF3A01' />
				<View style={styles.frmWrap}>
					<View >
						<Image style={styles.logoImage} source={require('../../images/logo.png')} />
					</View>
					<View style={styles.contentWrap}>
						<View style={styles.circle}>
							<Text> All details are here.  </Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

export default Home;
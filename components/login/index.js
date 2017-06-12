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

class Login extends Component {
	constructor(props) {
		super(props);

		this.goToLogin = this.goToLogin.bind(this);
	}

	goToLogin() {
		this.props.navigator.replace({
			title: 'Home' 
		});
	}

	render() {
		return (
			<View style={styles.loginWrap}>
				<StatusBar backgroundColor='#DF3A01' />
				<View style={styles.frmWrap}>
					<View style={styles.imgWrap} >
						<Image style={styles.logoImage} source={require('../../images/logo.png')} />
					</View>

					<View style={styles.textInputWrap}>
						<TextInput
							placeholder="Email/Username"
							style={styles.textInput}
						/>
					</View>

					<View style={styles.textInputWrap}>
						<TextInput
							placeholder="Password"
							secureTextEntry={true}
							style={styles.textInput}
						/>
					</View>

					<View style={styles.loginBtn}>
						<Button 
						 	onPress={this.goToLogin}
						 	title="Login" 
						 	color="#7f4e10"
						 	/>
					 </View>
				</View>
			</View>
		);
	}
}

export default Login;
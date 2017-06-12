import React, {Component} from 'react';
import {
	StyleSheet,
	Dimensions
} from 'react-native';

let {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
	loginWrap: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#FF8000',
	},
	frmWrap: {
		marginTop: 50,
		width:(width - width/3),
	},
	logoImage: {
		width:width/1.5,
	  height:width /4,
		resizeMode:'contain',
	},
	textInputWrap: {
		paddingTop: 20,
	},
	textInput: {
		height: 50,
		borderColor:'#92999c',
	},
	loginBtn: {
		paddingTop: 40,
	}
});
import React, {Component} from 'react';
import {
	StyleSheet,
	Dimensions
} from 'react-native';

let {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
	loginWrap: {
		flex: 1,
		backgroundColor: '#FF8000',
	},
	frmWrap: {
		flex:1,
		alignItems: 'center',
	},
	logoImage: {
		width:width/1.5,
	  height:width /4,
		resizeMode:'contain',
	},
	circle: {
		height: 300,
		width: 300,
		borderRadius: 500,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
	contentWrap: {
		height:height,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		top:0,
		bottom:0,
		left:0,
		right:0,
	}
});
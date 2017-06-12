import React, {Component} from 'react';
import {
	StyleSheet,
	Dimensions,

	} from 'react-native';

	var {height, width} = Dimensions.get('window');

	export default styles = StyleSheet.create({
		splashWrap: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
		},
		splashImage: {
			width: width,
			height: height,
		},
	});
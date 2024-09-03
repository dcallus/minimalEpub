import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
export const DIMENSIONS = { WIDTH: width, HEIGHT: height };

export const COLORS = {
	PRIMARY: '#0f2439',
	ELEVATED: '#F7F8FB',
	CONTRAST: '#000000'
};
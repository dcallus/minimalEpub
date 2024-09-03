import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DIMENSIONS, COLORS } from '../constants';

export default function BookItem({ book }) {
	const navigation = useNavigation();

	async function handleBookSelect() {
		navigation.navigate(`${book.type || 'epub'}-reader`, book.uri);
	}

	return (
		<TouchableOpacity
			activeOpacity={0.4}
			style={styles.wrapper}
			onPress={handleBookSelect}
			>
			<Text style={styles.title} numberOfLines={1}>
				{book.title || book.name}
			</Text>
			{book.author ? (
				<Text style={styles.author} numberOfLines={1}>
					{book.author}
				</Text>
			) : null}
		</TouchableOpacity>
	);
}

const styles = {
	wrapper: {
		height: 65,
		width: DIMENSIONS.WIDTH,
		paddingLeft: 15,
		paddingRight: 15
	},
	title: {
		fontSize: 15,
		marginBottom: 3,
		color: COLORS.CONTRAST
	},
	author: {
		fontSize: 14,
		color: 'rgba(0, 0, 0, 0.8)'
	}
};

import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { getDocumentAsync } from 'expo-document-picker';
import { useApp } from '../context';
import { COLORS } from '../constants';

export default function AddButton() {
	const { books, setBooks } = useApp();
	const removeExtension = (uri) => uri.substring(0, uri.lastIndexOf('.'));

	async function pickDocument() {
		const result = await getDocumentAsync({
			type: 'application/epub+zip',
			copyToCacheDirectory: false,
		});

		if (!result.canceled) {
			const addedBooks = result.assets.map(({ name, uri }) => ({
				uri,
				type: 'epub',
				name: removeExtension(name)
			}));

			console.log(result.assets);

			setBooks(books.concat(addedBooks));
		}
	}

	return (
		<TouchableWithoutFeedback onPress={pickDocument}>
			<View style={styles.view}>
				<Text style={styles.plus}>+</Text>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = {
	view: {
		backgroundColor: COLORS.PRIMARY,
		position: 'absolute',
		bottom: 20,
		right: 20,
		height: 60,
		width: 60,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1
	},
	plus: {
		color: 'white',
		fontSize: 30,
	}
};

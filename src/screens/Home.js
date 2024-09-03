import { View, Text, FlatList} from 'react-native';
import AddButton from '../components/AddButton';
import BookItem from '../components/BookItem';
import { useApp } from '../context';

export default function Home(props) {
	const { books } = useApp();

	return (
		<View style={styles.wrapper}>
			<AddButton />
			{books.length === 0 ? (
				<View style={styles.wrapper}>
					<Text style={styles.message}>Your library is empty!</Text>
					<Text style={styles.message}>Add some books to get started</Text>
					<Text style={[styles.message, { fontSize: 13, fontStyle: 'italic' }]}>
						(Only EPUB files supported)
					</Text>
				</View>
			) : (
				<FlatList
					contentContainerStyle={styles.flatlist}
					data={books}
					keyExtractor={(item, i) => item.uri}
					renderItem={({ item }) => <BookItem book={item} />}
				/>
			)}
		</View>
	);
}

const styles = {
	wrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff'
	},
	flatlist: {
		paddingTop: 15,
		paddingBottom: 10
	},
	message: {
		fontSize: 16,
		marginBottom: 5
	},
};

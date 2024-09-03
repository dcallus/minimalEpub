import { createContext, useState, useEffect, useCallback, useMemo, useContext } from 'react';

const initialState = {
	books: [
		// { name: '', title: '', uri: '', type: 'epub',
		// totalLocations: 0, pagesRead: 0, locations: [], lastSavedLocation: cfi
		// meta: true
		// }
	],
	settings: {
		backgroundColor: '#fafafa',
		foregroundColor: '#000000',
		sourceLang: '',
		targetLang: ''
	}
};

const KEYS = {
	BOOKS: 'books',
	SETTINGS: 'settings'
};

const AppContext = createContext(initialState);

export default function AppProvider({ children }) {
	const [books, setBooks] = useState([]);
	const [settings, setSettings] = useState(initialState.settings);
	const [openedBook, setOpenedBook] = useState(null);
	const [currentCfi, setCurrentCfi] = useState('');

	const addBooks = useCallback(
		(addedBooks) => {
			const newBooks = [...books, ...addedBooks];
			setBooks(newBooks);
		},
		[books]
	);

	const updateCurrentBook = useCallback(
		(updatedBook) => {
			const newBooks = [...books];
			const indexToUpdate = newBooks.findIndex((b) => b.uri === updatedBook.uri);
			if (indexToUpdate !== -1) {
				newBooks[indexToUpdate] = updatedBook;
				setBooks(newBooks);
				setOpenedBook(updatedBook);
			}
		},
		[books]
	);

	const contextValue = useMemo(
		() => ({
			books,
			setBooks,
			settings,
			currentCfi,
			setCurrentCfi
			// addBooks,
			// updateCurrentBook,
			// openedBook
		}),
		[books, settings, currentCfi]
	);

	return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);

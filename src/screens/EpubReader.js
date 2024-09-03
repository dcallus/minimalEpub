import { useEffect } from 'react';
import { SafeAreaView, useWindowDimensions } from 'react-native';
import { Reader, ReaderProvider, useReader } from '@epubjs-react-native/core';
import { useHeaderHeight } from '@react-navigation/elements';
import { useFileSystem} from '@epubjs-react-native/expo-file-system';
import { useApp } from '../context';

function EpubReader(props) {
	const { params: bookUri } = props.route;
	const headerHeight = useHeaderHeight();

	useEffect(() => {
	}, [currentCfi])

	const { currentCfi, setCurrentCfi } = useApp();
	const { goToLocation } = useReader();

	const { width, height } = useWindowDimensions();

	const changeLocation = (loc) => {
		if (loc?.start?.cfi == null) return;
		console.log('cfi on change = ' + loc.start.cfi);
		setCurrentCfi(loc.start.cfi)
	}

	return (
			<SafeAreaView style={{ flex: 1 }}>
				<Reader
					enableSelection
					src={bookUri}
					width={width}
					height={height - headerHeight}
					fileSystem={useFileSystem}
					onLocationChange={(_, loc) => changeLocation(loc)}
					onReady={() => {
						console.log('cfi on ready = ', currentCfi)
						goToLocation(currentCfi)
					}}

				/>
			</SafeAreaView>
	);
}

export default function (props) {
	return (
		<ReaderProvider>
			<EpubReader {...props} />
		</ReaderProvider>
	);
}
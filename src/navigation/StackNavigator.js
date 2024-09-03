import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import EpubReader from '../screens/EpubReader';

const Stack = createStackNavigator();


export default function Navigator() {

	return (
		<Stack.Navigator >
			<Stack.Screen name="home" component={Home} options={{ headerTitle: 'My Library' }} />
			<Stack.Screen
				name="epub-reader"
				component={EpubReader}
				options={{ headerTitle: '' }}
			/>
		</Stack.Navigator>
	);
}

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppProvider from './src/context';
import StackNavigator from './src/navigation/StackNavigator';

export default function App() {
	return (
		<NavigationContainer>
			<AppProvider>
				<StackNavigator />
			</AppProvider>
		</NavigationContainer>
	);
}

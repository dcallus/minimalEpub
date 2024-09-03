import FeatherIcon from '@expo/vector-icons/Feather';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';

export default function Icon(props) {
	switch (props.type) {
		case 'material':
			return <MaterialIcon {...props} />;
		default:
			return <FeatherIcon {...props} />;
	}
}

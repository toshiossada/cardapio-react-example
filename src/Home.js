import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeList from './HomeList';
import HomeProducts from './HomeProducts';

const Navegador = createStackNavigator({
	HomeList:{
		screen:HomeList
	},
	HomeProducts:{
		screen:HomeProducts
	}
});
const AppContainer = createAppContainer(Navegador);
export default AppContainer;
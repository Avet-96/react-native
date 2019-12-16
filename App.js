import React, {Component} from 'react';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import Home from './src/components/Home';
import reducers from './src/store/reducers/index';
import watchers from './src/store/saga/index';
import createSagaMiddleware from 'redux-saga';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Setting from './src/components/Setting';
import {ActivityIndicator, TextInput} from 'react-native';
import Categories from './src/components/categories/Categories';
import Confirmed from './src/components/confirmed/Confirmed';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(watchers);


const AppNavigator = createStackNavigator({
		Home: {
			screen: Home, navigationOptions: ({navigation}) => ({
				title: 'UBird',
				headerTitleStyle: {color: '#ffffff'},
				headerStyle: {
					backgroundColor: 'blue',
				},
			}),
		},
		Setting: {
			screen: Setting, navigationOptions: ({navigation}) => ({
				title: 'Setting',
				headerTitleStyle: {color: '#ffffff'},
				headerStyle: {
					backgroundColor: 'red',
				},
			}),
		},
		Categories: {
			screen:Categories,navigationOptions:({navigation})=>({
				title:'Category',
				headerTitleStyle: {color: '#ffffff'},
				headerStyle:{
					backgroundColor:'aqua'
				}
			})
		},
	},
);

const Navigation = createAppContainer(AppNavigator);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: true,
			isConfirmed:false,
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isOpen: false,
			});
		}, 2000);
	}

	render() {
		return (
			<Provider store={store}>
				{this.state.isOpen ? <ActivityIndicator
						size="large" color="#0000ff"
					/> : <Home/>}

			</Provider>
		);
	}
}


export default App;

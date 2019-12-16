import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllProducts, getProductCategories, getProductName} from '../../store/action/search';
import {
	View, TextInput, StyleSheet, Image, Button, StatusBar, ToolbarAndroid,
} from 'react-native';


import Product from './Product';

class Search extends Component {
	static navigationOptions = {
		title: 'Settings',
	};

	constructor(props) {
		super(props);
		this.state = {
			search: '',
			sectionsData: [],
		};

	}


	setData = async () => {
		this.props.getProductName(this.state.search);
	};

	render() {
		const {name} = this.state;
		return (
			<>
				<StatusBar
					backgroundColor='black'
					animated={true}
				/>
				<TextInput
					placeholder='Enter product'
					onChangeText={(name) => this.setState({name})}
					value={name}
				/>
				<Button
					title="Press me"
					onPress={this.setData}
				/>
				<Product/>
			</>
		);
	}
}

const styles = StyleSheet.create({
	containerToolbar: {
		flex: 1,
		//justifyContent: 'center',
		justifyContent: 'flex-start',
		// https://github.com/facebook/react-native/issues/2957#event-417214498
		alignItems: 'stretch',
		backgroundColor: 'black',
	},
	toolbar: {
		backgroundColor: '#e9eaed',
		height: 20,
	},
});
const mapStateToProps = (state) => ({
	product: state.search.product,
	allProductData: state.search.allProductData,
});
const mapDispatchToProps = {
	getProductName,
	getAllProducts,
	getProductCategories,
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Search);

export default Container;

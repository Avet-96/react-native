import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllProducts, getFilterProductsData, getProductName} from '../store/action/search';
import {
	View, TextInput, StyleSheet, Text, FlatList, ImageBackground, ActivityIndicator,
} from 'react-native';


class Setting extends Component {
	static navigationOptions = ({navigation}) => {

	};

	constructor(props) {
		super(props);
		this.state = {
			search: '',
			sectionsData: [1, 2],
		};
	}

	handelFooter = () => {
		return (
			<View style={styles.loader}>
				<ActivityIndicator size='large'/>
			</View>
		);
	};
	handelPress = (id) => {
		this.props.getFilterProductsData(id);
		this.props.navigation.navigate('Categories')
	};

	renderData = ({item}) => {
		return (
			<View style={styles.category__block}>
				<ImageBackground
					source={require('./img/aaa.jpg')}
					style={{width: '80%', height: '100%', left: 30, top: 20, marginBottom: 20, borderRadius: 8}}>
					<Text onPress={() => this.handelPress(item.category_description.category_id)}
					      style={styles.category__name}>{item.category_description.name}</Text>
				</ImageBackground>

			</View>
		);
	};

	render() {
		return (
			<>
				<FlatList
					style={styles.category}
					data={this.props.productCategories.categories}
					renderItem={this.renderData}
					keyExtractor={(item, index) => index.toString()}
					onEndReachedThreshold={0}
					ListFooterComponent={this.handelFooter}

				/>

			</>
		);
	}
}

const styles = StyleSheet.create({
	category: {
		flex: 1,
	},
	loader: {marginTop: 10, alignContent: 'center'},
	category__block: {
		width: '100%',
		height: 200,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	category__name: {
		width: '80%',
		height: '100%',
		textAlign: 'center',
		paddingTop: 80,
		fontSize: 18,
	},

});
const mapStateToProps = (state) => ({
	product: state.search.product,
	allProductData: state.search.allProductData,
	productCategories: state.search.productCategories,
});
const mapDispatchToProps = {
	getProductName,
	getAllProducts,
	getFilterProductsData,
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Setting);

export default Container;

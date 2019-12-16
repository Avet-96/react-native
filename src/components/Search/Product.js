import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllProducts, getProductName} from '../../store/action/search';
import {
	View, Button, StyleSheet, Image, Text, FlatList, ActivityIndicator,
} from 'react-native';

const API_PAH = 'http://127.0.0.1:8000/';

class Product extends Component {

	constructor(props) {
		super(props);
		this.state = {
			page: 0,
		};
	}


	renderData = ({item}) => {
		return (<>
			<View style={styles.products__compani_name}>
				<Text>{'Company name' + item.id}</Text>
			</View>
			<View style={styles.products__images_block}>
				<Image source={{
					uri: API_PAH + item.image,
				}}
				       style={styles.image}
				/>
			</View>
			<View style={styles.products__name_block}>
				<Text style={styles.products__name}> {item.product_descriptions[0].name}</Text>
				<Text style={styles.products__price}>{item.product_descriptions[0].price}</Text>
			</View>
			<View style={styles.products__description_block}>
				<Text style={styles.products__description}>
					{item.product_descriptions[0].meta_title}
				</Text>
			</View>
			<Button
				title="Press me"
				onPress={this.handelPress}
			/>
		</>);
	};

	handelFooter = () => {
		return (
			<View style={styles.loader}>
				<ActivityIndicator size='large'/>
			</View>
		);
	};
	handelEntTopScroll = async () => {
		await this.setState({
			page: this.state.page + 10,
		});
		await this.props.getAllProducts(this.state.page);
	};

	render() {
		let data= this.props.allProductData;
		return (

			<FlatList style={styles.products}
			          data={data}
			          renderItem={this.renderData}
			          keyExtractor={(item, index) => index.toString()}
			          onEndReached={this.handelEntTopScroll}
			          onEndReachedThreshold={0.0001}
			          ListFooterComponent={this.handelFooter}
			/>


		)
			;
	}
}

const styles = StyleSheet.create({
		loader: {marginTop: 10, alignContent: 'center'},
		container: {flex: 1},
		scrollView: {marginHorizontal: 20, marginBottom: 5},
		text: {fontSize: 42},
		products: {width: '100%', height: '100%', display: 'flex', padding: '2%', borderWidth: 1, borderColor: 'black'},
		products__compani_name: {width: '100%', height: 30},
		products__images_block: {width: '100%', height: 150},
		image: {width: '100%', height: '100%'},
		products__name_block: {width: '100%', height: 60, display: 'flex', flexDirection: 'row'},
		products__name: {fontSize: 15, width: '45%'},
		products__price: {fontSize: 15, width: '45%'},
		products__description_block: {width: '100%', height: 60},
		products__description: {fontSize: 12},
		//	toolbar: {backgroundColor: '#2196F3', height: 56, alignSelf: 'stretch', textAlign: 'center'},
	},
);
const mapStateToProps = (state) => ({
	product: state.search.product,
	allProductData: state.search.allProductData,
});
const mapDispatchToProps = {
	getProductName,
	getAllProducts,
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Product);

export default Container;


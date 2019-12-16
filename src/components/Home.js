import React, {Component} from 'react';
import {
	View, StyleSheet, DrawerLayoutAndroid, Button,
} from 'react-native';
import {connect} from 'react-redux';
import Search from './Search/Search';
import DraverLoader from './leftMenu/DraverLoader';
import {getAllProducts, getProductCategories} from '../store/action/search';


class Home extends Component {
	static navigationOptions = ({navigation}) => {

	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props.getAllProducts(0);
		this.props.getProductCategories();
	}


	render() {
		return (
			<DrawerLayoutAndroid
				drawerWidth={300}
				drawerPosition='left'
				renderNavigationView={() => <DraverLoader/>}>
				<View style={styles.body}>
					<Button
						title='Categories'
						onPress={() => this.props.navigation.navigate('Setting')}
					/>
					<Search/>
				</View>
			</DrawerLayoutAndroid>
		);
	}

}


const styles = StyleSheet.create({
	body: {width: '100%', height: '100%'},
});
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = {
	getAllProducts,
	getProductCategories
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home);


export default Container;

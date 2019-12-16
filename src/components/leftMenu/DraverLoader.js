import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllProducts, getProductName} from '../../store/action/search';
import {
	View, StyleSheet, Text, Picker,
} from 'react-native';



class DraverLoader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			language: 'ru',
		};
	}

	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#ffffff'}}>
				<View style={styles.logo}>
					<Text style={styles.logo__block}>UB</Text>
					<Text style={styles.logo__name}>UBird.</Text>
					<View>
						<Picker
							selectedValue={this.state.language}
							style={{height: 30, width: 90}}
							onValueChange={(itemValue, itemIndex) =>
								this.setState({language: itemValue})
							}>
							<Picker.Item label="RU" value="russian"/>
							<Picker.Item label="AM" value="armenian"/>
							<Picker.Item label="EN" value="english"/>
						</Picker>
					</View>
				</View>
				<View style={styles.manue__main__block}>
					<View style={styles.manue__block}>
						<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Каталог товаров</Text>
						<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Оплата и доставка</Text>
						<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Акции</Text>
						<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Контакты</Text>
					</View>
					<View style={styles.config__block}>
						<Text style={styles.contat__number}>(+374)94111111</Text>
						<Text style={styles.choose__drag}>Аптечка:0</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	logo: {
		width: '100%',
		height: 80,
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		alignItems: 'center',
	},
	logo__block: {
		width: 60, height: 60, color: '#ffffff',
		borderRadius: 100, backgroundColor: '#FB3159',
		fontSize: 33, paddingLeft: 7, paddingTop: 5,
	},
	logo__name: {
		width: '55%',
		height: 40, fontSize: 22,
		display: 'flex', paddingLeft: 10, paddingTop: 13,

	},
	manue__main__block:{
		display:'flex',
		flexDirection:'column',
		alignContent:'space-between'
	},
	manue__block:{
		display:'flex',
		flexDirection: 'column',
		marginBottom: 200
	},
	config__block:{
		width:'100%',
		height:80,
		padding:'4%',
	},
	contat__number:{
		fontSize:15,
		marginBottom:10
	},
	choose__drag:{
		width:120,
		height:40,
		textAlign:'center',
		paddingTop:9,
		borderWidth:2,
		borderColor:'#FB3159',
		fontSize:14,
		borderRadius:18
	}
});
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
)(DraverLoader);

export default Container;

import React, {Component} from 'react';
import PhoneInput from 'react-phone-input-2';
import {connect} from 'react-redux';
import {
	View,
	TextInput,
	StyleSheet,

} from 'react-native';



class Confirmed extends Component {


	constructor(props) {
		super(props);
		this.state = {
			phone: '',
		};

	}

	componentDidMount() {
		this.setState({
			pickerData: this.phone.getPickerData(),
		});
	}


	render() {

		return (

				<PhoneInput
					country={'AM'}
					value={this.state.phone}
					onChange={phone => this.setState({phone})}
				/>

		);
	}
}

const styles = StyleSheet.create({});
const mapStateToProps = (state) => ({
	filterProductsIdData: state.search.filterProductsIdData,
});
const mapDispatchToProps = {};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Confirmed);

export default Container;

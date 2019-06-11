import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableHighlight } from 'react-native';

export default class HomeList extends Component {

	constructor(props) {
		super(props);
		this.state = {

			list:[
				{
					key:1,
					title:'Prato Executivo',
					img:require('../assets/images/tipos/pe.png'),
					description:'Pratos já prontos para comer.',
					bg:'#e35339',
					products:[
						{key:1, name:'Prato de Frango', img:require('../assets/images/cardapio/pe/executivos_frang_.png')},
						{key:2, name:'Prato de Peixe', img:require('../assets/images/cardapio/pe/executivos_peix_.png')},
						{key:3, name:'Prato de Picanha', img:require('../assets/images/cardapio/pe/executivos_picanh_.png')}
					]
				},
				{
					key:2,
					title:'Saladas',
					img:require('../assets/images/tipos/saladas.png'),
					description:'Pratos saudáveis para você.',
					bg:'#a6bb24',
					products:[
						{key:1, name:'Salada de Frango', img:require('../assets/images/cardapio/saladas/salada-fr.png')},
						{key:2, name:'Salada Agua Doce', img:require('../assets/images/cardapio/saladas/salada_aguadoc_.png')},
						{key:3, name:'Sala Salmão', img:require('../assets/images/cardapio/saladas/salada_salma.png')}
					]
				},
				{
					key:3,
					title:'Bebidas',
					img:require('../assets/images/tipos/bebidas.png'),
					description:'Refrescos para você.',
					bg:'#079ed4',
					products:[
						{key:1, name:'Caipirosca', img:require('../assets/images/cardapio/bebidas/capirosc_3.png')},
						{key:2, name:'Cookie Cream', img:require('../assets/images/cardapio/bebidas/cookies_crea.png')},
						{key:3, name:'Morango GD', img:require('../assets/images/cardapio/bebidas/morango_gd.png')},
						{key:4, name:'Patra', img:require('../assets/images/cardapio/bebidas/patra.png')},
						{key:5, name:'Suco Fitness', img:require('../assets/images/cardapio/bebidas/suco_fitines_gd.png')}
					]
				},
				{
					key:4,
					title:'Sobremesas',
					img:require('../assets/images/tipos/sobremesa.png'),
					description:'Sobremesas para você.',
					bg:'#fcb81c',
					products:[
						{key:1, name:'Brownie', img:require('../assets/images/cardapio/sobremesas/brownie_gd.png')},
						{key:2, name:'Creme papaya', img:require('../assets/images/cardapio/sobremesas/creme_papaya_cassis_gd.png')},
						{key:3, name:'Delicia Gelada', img:require('../assets/images/cardapio/sobremesas/delicia_gelada_gd.png')}
					]
				},
			]

		};
	}

	static navigationOptions = {
		title:'Restaurante XYZ',
		tabBarLabel:'Home',
		tabBarIcon:({focused, tintColor}) => {
			if(focused) {
				return (
					<Image source={require('../assets/images/home_azul.png')} style={styles.icone} />
				);
			} else {
				return (
					<Image source={require('../assets/images/home_preto.png')} style={styles.icone} />
				);
			}
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.list}
					renderItem={({item}) => <Lista data={item} navigation={this.props.navigation} />}
				/>
			</View>
		);
	}

}

class Lista extends Component {

	constructor(props) {
		super(props);
		this.state = {};

		this.clicou = this.clicou.bind(this);
	}

	clicou() {
		this.props.navigation.navigate('HomeProducts', {title:this.props.data.title, products:this.props.data.products});
	}

	render() {
		return(
			<TouchableHighlight underlayColor="#CCCCCC" onPress={this.clicou}>
				<View style={[styles.listaItem, {backgroundColor:this.props.data.bg}]}>
					<Image source={this.props.data.img} style={styles.listaImagem} />
					<View>
						<Text style={styles.listaTitle}>{this.props.data.title}</Text>
						<Text style={styles.listaDescription}>{this.props.data.description}</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	}

}



const styles = StyleSheet.create({
	icone:{
		width:26,
		height:26
	},
	container:{
		flex:1
	},
	listaItem:{
		height:100,
		flex:1,
		flexDirection:'row',
		alignItems:'center'
	},
	listaImagem:{
		width:64,
		height:64,
		marginLeft:20,
		marginRight:20
	},
	listaTitle:{
		color:'#FFFFFF',
		fontSize:25,
		fontWeight:'bold'
	},
	listaDescription:{
		color:'#FFFFFF',
		fontSize:16
	}
});












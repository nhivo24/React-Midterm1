import React, {Component} from "react";

import RomItem from './RomItem';
import {
  Container, Row, Col,Card, CardImg,CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import './Rom.css';

import { FaSearchDollar } from "react-icons/fa";

export const CartContext = React.createContext();

class Rom extends Component{
	constructor(props) {
	  		super(props);
	  		let products=	JSON.parse(localStorage.getItem("products"));	      
	  			products= [{
				  "id": "1",
				  "name": "2 giường đôi lớn",
				  "type": "Phòng Family",
				  "imageUrl": "room4.jpg",
				  "number":4,
				  "area":"6m2",
				  "price":17000000,
				  "oldprice":19000000
				}, 
				{
				  "id": "2",
				  "name": "3 giường",
				  "type": "Phòng Family",
				  "imageUrl": "room3.jpg",
				  "number":4,
				  "area":"6m2",
				  "price":17000000,
				  "oldprice":19000000
				}
				]
 				
		
		localStorage.setItem("products",JSON.stringify(products));
		
			this.state={
				products:products
			}

		
		}
	render(){
		return(
			<div>
			<Container className="home">						
				 {this.state.products.map((item,index)=><RomItem 				 	
				 	key={index} 
				 	item={item}/>)}				 
			</Container>
			</div>
			);
		}
	}
	
export default Rom;
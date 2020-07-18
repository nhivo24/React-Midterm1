import React, {Component} from "react";
import './AddRom';
import { BsFillTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import {
  Container, Row, Col,Card, CardImg,CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class AddProduct extends Component{

constructor(props) {
	  super(props);
	  let products = JSON.parse(localStorage.getItem("products"));

		if(!products){
			products = [];
		}	
		this.state = {
	  	products: products,
	  };
	 
	  this.onAddProduct=this.onAddProduct.bind(this);
	  this.onDeleteClick=this.onDeleteClick.bind(this);
	}
onAddProduct(event){
		event.preventDefault();
		let id = 0;
		let name = event.target["name"].value;
		let price = event.target["price"].value;
		let type = event.target["type"].value;
		let area = event.target["area"].value;
		let number = event.target["number"].value;
		let oldprice = event.target["oldprice"].value;
		let imageUrl = event.target["imageUrl"].files.item(0).name;
		let products = JSON.parse(localStorage.getItem("products"));

		if (!products) {
            products = [];
            id=0;
        }
        else
        {
            id=products[products.length-1].id+1;
        }
		let product ={
			id:id,
			name:name,
			price: price,
			type:type,
			area:area,
			number:number,
			oldprice:oldprice,
			imageUrl:imageUrl
		}
		
		products.push(product);
		localStorage.setItem("products",JSON.stringify(products));
		this.setState({
			 products:products
		});      

	}
onDeleteClick(){
	return(event)=>{
		
		let products =JSON.parse(localStorage.getItem("products"));
		products.splice(products, 1);
		localStorage.setItem("products",JSON.stringify(products));

		this.setState({
			 products:products
		});
		
	 }
}

render(){
		
	return(
		<div>
		<form className="AddProduct" onSubmit={this.onAddProduct} >
		 <div className="form-row">
		  <input type="text" hidden className="form-control" name="id" />
		    <div className="form-group col-md-2">
		      <label for="Name">Name Product</label>
		      <input type="text" className="form-control" name="name"  placeholder="Name Room"/>
		    </div>
		     <div className="form-group col-md-2">
		      <label for="inputState">Type</label>
		      <select id="inputState" className="form-control"  name="type">
		        <option value="Phòng Family">Phòng Family</option>
		        <option value="Phòng Double">Phòng Double</option>
		      </select>
    		</div>
		  </div>
		  <div className="form-row">
		  <div className="form-group col-md-4">
		    <label for="Area">Area</label>
		    <input className="form-control"  name="area" rows="3"></input>
		  </div>
		  <div className="form-group col-md-4">
		    <label for="oldprice">Old Price</label>
		    <input className="form-control"  name="oldprice" rows="3"></input>
		  </div>
		  </div>
		<div className="form-row">		  
		  <div className="form-group col-md-2">
		    <label for="imageUrl">Image</label>
		    <input type="file" className="form-control-file" name="imageUrl"/>
		  </div>
		  <div class="form-group col-md-2">
	      <label for="inputZip">Number</label>
	      <input type="text" className="form-control"  name="number" />
	    	</div>
	    	<div className="form-group col-md-2">
		    <label for="price">Price</label>
		    <input type="text" className="form-control"  name="price" placeholder="Price"/>
		  </div>
		</div>
		  <button type="submit" id="add" className="btn btn-primary" >
		  Submit
		  </button>
		</form>
		<div>
		<Container>
		<table align="center" width="600px" border="1"  cellspacing="0" cellpadding="3" className="table table-hover table-bordered">
		  <tr className="table-primary table-header" >
		    <th>STT</th>
		    <th >Name Room</th>
		    <th >Price</th>
		    <th >Old Price</th>
		    <th >Area</th>
		    <th >Number</th>
		    <th >Category</th>
		    <th >Image</th>
		    <th>Edit</th>
		    <th >Delete</th>		    
		  </tr>
			{this.state.products.map((item,key)=>(
				<tr>
				<td>{item.id}</td>
				<td>{item.name}</td>
				<td>{item.price}</td>
				<td>{item.oldprice}</td>
				<td>{item.area}</td>
				<td>{item.number}</td>
				<td>{item.type}</td>
				<td><CardImg src={'image/'+item.imageUrl}></CardImg></td>
				<td>
				<div className="col-2 col-sm-2 col-md-2 text-right">
		            <button type="button" className="btn btn-outline-danger btn-xs">
		              <BsPencilSquare></BsPencilSquare>
		            </button>
		        </div>
		        </td>
		        <td>
				 <div className="col-2 col-sm-2 col-md-2 text-right">
		            <button type="button" className="btn btn-outline-danger btn-xs" onClick={this.onDeleteClick(key)}>
		               <BsFillTrashFill></BsFillTrashFill>
		            </button>
		         </div>
				</td>
				</tr>
				)
			)}					
		  </table>
	</Container>
  </div>
</div>

	);
	 }}
export default AddProduct;


import React, {Component} from "react";
import {
  Container, Row, Col,Card, CardImg,CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";

import './Rom.css';


class RomItem extends Component{
onClick(){

		 
		alert("add susscess");

	}
    
render(){
 	return(	

               
    <div className="col-sm-4">
      <img width="100%" height="150px" src={'image/'+this.props.item.imageUrl}/>       
         <b>{this.props.item.type} </b>

         <hr/>
         <div className="float-between">
           <span> PHÒNG</span><p>{this.props.item.name}</p>
         </div>  
         <hr/>
   
         <div className="float-between">
           <span> CHỖ NGHỈ</span><p>{this.props.item.number}</p>
         </div>     
          <hr/>
          <div className="float-between">
           <span> KÍCH THƯỚC</span><p>{this.props.item.area}</p>
         </div>     
          <hr/>
          <div className="float-between">
           <span> GIÁ PHÒNG</span><p>{this.props.item.price} VND</p>
         </div>     
          <hr/>
          <div className="float-between">
         <span> XEM</span><Button outline color="warning" onClick={this.onClick}>ĐẶT PHÒNG</Button>
         </div> 

    </div>

 
			);
	}
}
export default RomItem;

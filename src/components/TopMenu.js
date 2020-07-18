import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FaSearchDollar } from "react-icons/fa";
import { AiTwotoneHome } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { AiFillClockCircle } from 'react-icons/ai';
import { BsFillImageFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Rom.css';
const Example = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="topmenu">
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/"></NavLink>
            </NavItem>
            <NavItem>
              <NavLink > 
              <Link to="/Rom"><AiTwotoneHome></AiTwotoneHome>Trang Chủ</Link>
              </NavLink>
            </NavItem>
             <NavItem>
              <NavLink > 
              <Link to=""><AiFillStar></AiFillStar>Phòng và mức giá</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink > 
              <Link to="/AddRom"><AiFillClockCircle></AiFillClockCircle>Đặt Phòng</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink > 
              <Link ><BsFillImageFill></BsFillImageFill>Hình Ảnh</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
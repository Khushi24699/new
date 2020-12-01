import React,{Component} from 'react';
import ReactDOM from 'react-dom'
// import { Columns, Container,button } from 'react-bulma-components';
import * as ReactBootstrap from "react-bootstrap";
import './main.css'
import Searchevent from './Searchevent.jsx' ;



         
export default class Navbar extends React.Component {

       render(){
         
         return(
            <ReactBootstrap.Navbar className="navbar-default" id="nav" bg="light" variant="light" expand="lg">
             {/* <ReactBootstrap.Navbar.Container>
             <ReactBootstrap.Row>
             <ReactBootstrap.Col xs={0.5} md={0}>
                 <ReactBootstrap.Col.Image src="./user.jpg" roundedCircle />
             </ReactBootstrap.Col>
             </ReactBootstrap.Row>
             </ReactBootstrap.Navbar.Container> */}
            <ReactBootstrap.Navbar.Brand href="#home">User-info</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
               <ReactBootstrap.Nav className="mr-auto">
                {/* <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="#link">Link</ReactBootstrap.Nav.Link> */}
                
              </ReactBootstrap.Nav>  
                <ReactBootstrap.Form inline >
                {/* <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                <Searchevent/>
                
                <ReactBootstrap.Button variant="Light">
                <svg width="3em" height="2em" viewBox="0 0 16 16" className="bi bi-bell" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z"/>
                  <path fillRule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                </svg></ReactBootstrap.Button>
                
                
     
                <ReactBootstrap.Button variant="Light"  >
                <ReactBootstrap.NavDropdown>
                  <ReactBootstrap.NavDropdown.Item href="#action/3.1">Action</ReactBootstrap.NavDropdown.Item>
                  <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
                  <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
                  <ReactBootstrap.NavDropdown.Divider />
                  <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
                  </ReactBootstrap.NavDropdown>
                 </ReactBootstrap.Button>
                 
     
              </ReactBootstrap.Form>
            </ReactBootstrap.Navbar.Collapse>
               </ReactBootstrap.Navbar>
         //   <Navbar brand='React-Bootstrap'>
         //   <Nav right eventKey={0}>
         //     <Navbar.NavItem eventKey={1} href='#'><i className="fa fa-envelope fa-fw"></i>Link</Navbar.NavItem>
         //     <Navbar.NavItem eventKey={2} href='#'>Link</Navbar.NavItem>
         //     <Navbar.DropdownButton 
         //       eventKey={3} 
         //       title={
         //         <span><i className="fa fa-user fa-fw"></i> Bootstrap</span>
         //       }
         //     >
         //       <MenuItem eventKey='1'><i className="fa fa-envelope fa-fw"></i> User Profile</MenuItem>
         //       <MenuItem eventKey='2'><i className="fa fa-gear fa-fw"></i> Settings</MenuItem>
         //       <MenuItem divider />
         //       <MenuItem eventKey='3'><i className="fa fa-sign-out fa-fw"></i> Logout</MenuItem>
         //     </Navbar.DropdownButton>
         //   </Nav>
         // </Navbar>
     
              )
            
        }
    }
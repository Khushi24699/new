import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import { Columns, Container,button } from 'react-bulma-components';
import * as ReactBootstrap from "react-bootstrap";
import './main.css'

export default class Unscheduled extends React.Component {
   
    constructor(props) {
      super(props);
      this.state = {
        list: ["Go somewhere", "Do something", "Sleep"]
      }; 
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
    }
  
    addItem(e) {
      
      e.preventDefault();
  
     
      let list = this.state.list;
      const newItem = document.getElementById("addInput");
      const form = document.getElementById("addItemForm");
  
      
      if (newItem.value != "") {
       
        list.push(newItem.value);
        
        this.setState({
          list: list
        });
       
        newItem.classList.remove("is-danger");
        form.reset();
      } else {
        
        newItem.classList.add("is-danger");
      }
    }
  
    removeItem(item) {
      
      const list = this.state.list.slice();
   
      list.some((el, i) => {
        if (el === item) {
          
          list.splice(i, 1);
          return true;
        }
      });
      
      this.setState({
        list: list
      });
    }
  
    render() {
      return (
        <div className="content">
          <div className="container">
            <section className="section">
                          <List items={this.state.list} delete={this.removeItem} />
            </section>
            <hr />
            <section className="section">
              <form className="form" id="addItemForm">
                <input
                  type="text"
                  className="input"
                  id="addInput"
                  placeholder="Something that needs ot be done..."
                />
                <button className="button is-info" onClick={this.addItem}>
                  Add Item
                </button>
              </form>
            </section>
          </div>
        </div>
      );
    }
  }
  
  class List extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              filtered: []
          };
          this.handleChange = this.handleChange.bind(this);
      }
      
      componentDidMount() {
      this.setState({
        filtered: this.props.items
      });
    }
  
    componentWillReceiveProps(nextProps) {
      this.setState({
        filtered: nextProps.items
      });
    }
      
      handleChange(e) {
         
      let currentList = [];
          
      let newList = [];
          
          
      if (e.target.value !== "") {
             
        currentList = this.props.items;
              
              
        newList = currentList.filter(item => {
                 
          const lc = item.toLowerCase();
                  
          const filter = e.target.value.toLowerCase();
          return lc.includes(filter);        
        });
      } else {
             
        newList = this.props.items;
      }
          
      this.setState({
        filtered: newList
      });
    }
      
      render() {
          return (
              <div>
                  <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                      <ul>
                      
                          {this.state.filtered.map(item => (
                            
                              <li key={item}>
                                <div class="row">
                                 <ReactBootstrap.Card body>
                                  {item} &nbsp;
                                  {/* <span
                                      className="delete"
                                      onClick={() => this.props.delete(item)}
                                      /> */}
                                      
                                      </ReactBootstrap.Card>
                                      <button class="close col-sm-1 remove_button" onClick={() => this.props.delete(item)}>
                                       <svg width="2em" height="1.3em" viewBox="0 0 16 16" class="bi bi-file-x-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                       <path fill-rule="evenodd" d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.854 6.146a.5.5 0 1 0-.708.708L7.293 8 6.146 9.146a.5.5 0 1 0 .708.708L8 8.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 8l1.147-1.146a.5.5 0 0 0-.708-.708L8 7.293 6.854 6.146z"/>
                                       </svg>
                                       
                                      </button>
                                      </div>
                              </li>
                              
                          ))}
                          
                      </ul>
                  </div>
          )
      }
  }

  
  
 
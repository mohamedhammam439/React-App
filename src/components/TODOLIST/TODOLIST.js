import React, { Component } from 'react';
import Dolist from './Dolist';
import Addlist from './Addlist';
import './TODOLIST.css';


class TODOLIST extends Component {

  state = {
    items : [
      {id:1,name:'Breakfast',hours:'1'},
      {id:2,name:'Resting',hours:'1'},
      {id:3,name:'Studing',hours:'3'},
    ]
  }

  deletitem = (id) => {
    let user=this.state.items;
    let i = user.findIndex(item => item.id === id );
    user.splice(i,1);
    // let user=this.state.items.filter(item=>{
    //   return item.id !== id
    // })
    this.setState({items:user})
  }

  addlist =(k)=>{
    let user=this.state.items
    user.push(k)
    this.setState({items:user})
  }

  render() {
    return (
      <section className="TODOLIST">
        <div className='todocontainer'>
          <h1 className='h1todolist'>ToDoList App</h1>
          <Dolist items={this.state.items} deletitem={this.deletitem}/>
          <Addlist addlist={this.addlist} />
        </div>
      </section>
    );
  }
 
}

export default TODOLIST;

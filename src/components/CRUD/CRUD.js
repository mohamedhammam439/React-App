import React, { Component } from 'react';
import Listcrud from './Listcrud';
import Formcrud from './Formcrud';
import './CRUD.css';


class App extends Component{

  state={
    courses: [
      {name:'English'},
      {name:'Arabic'},
      {name:'French'},
    ], current:''
  }


  // updateCourse
  updateCourse=(e)=>{
    this.setState({
      current:e.target.value
    })

  }


  // AddCourse
  AddCourse=(e)=>{
    e.preventDefault();
    let current=this.state.current;
    let courses=this.state.courses;            // namee because id of input id=namee because of CSS.
    if (e.target.namee.value === '') {        // why must get id for this condition ?? (e.target = input )  (name = id of input in form)
      return false                           // why we don't wright e.target.value onlyyyyyyyyyy ???!!
    }else {                                 // what is the diffrent between - e.target.value & - e.target.name.value & - e.target.elements.name.value ??
      courses.push({name:current})
      this.setState({
        courses ,
        current:''
      })
    }
  
  }


  // DeleteCourse
  DeleteCourse=(index)=>{
    let courses=this.state.courses;
    courses.splice(index,1)
    this.setState({
      courses
    })
  }


  // editCourseItem
  editCourseItem=(index,value)=>{
    let courses=this.state.courses;
    let course=courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }


  render() {
    const {courses}=this.state;
    const legnth=courses.length;
    const courselist=legnth ? (courses.map((course,index)=>{
      return <Listcrud details={course} key={index} DeleteCourse={this.DeleteCourse} index={index} editCourseItem={this.editCourseItem} />
    })):(
      <p className='pcrud'>There Is No Courses To Show</p>
    )
    return(
      <section className='crud'>
        <div className='crudcontainer'>
          <h1 className='h1crud'>What Do You Want To Learn?</h1>
          <Formcrud  updateCourse={this.updateCourse} AddCourse={this.AddCourse} current={this.state.current} />
          <ul className='ulcrud'>{courselist}</ul>
        </div>
        
      </section>
    )
  }
 
}

export default App;

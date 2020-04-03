import React, { Component,Fragment } from 'react';


class Listcrud extends Component{

    state={
        isEdit : false
    }

    // toggleCourse
    toggleCourse=()=>{
        let {isEdit}=this.state;
        this.setState({
            isEdit : !isEdit
        })
    }


    // rendercourse
    renderCourse=()=>{
        return(
            <li className='licrud'>
                <span className='spancrud'>{this.props.details.name}</span>  
                <button  className='buttoncrudedit' onClick={ ()=> {this.toggleCourse()}} >Edit</button>
                <button  className='buttoncruddele' onClick={ ()=> {this.props.DeleteCourse(this.props.index)}}>Delete</button>
            </li>
        )
    }

    // updatecourse
    updatecourse=(e)=>{
        e.preventDefault();
        this.props.editCourseItem(this.props.index ,this.input.value);
        this.toggleCourse();

    }



    // editeCourse
    editeCourse=()=>{
        return(
            <form onSubmit={this.updatecourse}>
                <input className='forminputcrud' type='text' defaultValue={this.props.details.name} ref={(v)=> {this.input = v} } />
                <button  className='buttoncrud'>Update</button>
            </form>
        )
    }


    render(){
        let isEdit=this.state.isEdit;
        return(
            <Fragment>
               { isEdit ? this.editeCourse() : this.renderCourse() }
                
            </Fragment>
        )
    }
}
export default Listcrud;
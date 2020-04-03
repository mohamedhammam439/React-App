import React , {Component} from 'react';

const Dolist =(props)=> {
    const users=props.items;
    const {deletitem}=props;
    const length=users.length
    const theitem=length ? (users.map(item => {
        return(
            <div key={Math.random()*10} className='Dolist'>
                <span className='num'> {item.id} </span>
                <span className='name'> {item.name} </span>
                <span className='hours'> {item.hours} </span>
                <span className='action icon' onClick={()=>deletitem(item.id)}> &times; </span>
            </div>
        )
    })) : (
        <p className='ptodolist'>There is no action</p>
    )
    return(
        <div className='todo'>

            <div className='bar'>
                <span className='num blue '>Id</span>
                <span className='name blue'>Action</span>
                <span className='hours blue'>Hours</span>
                <span className='action '>Dele</span>
            </div>
           
            {theitem}
            
        </div>
    )
}
export default Dolist;
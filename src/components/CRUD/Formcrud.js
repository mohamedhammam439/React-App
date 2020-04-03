import React from 'react';


const Formcrud = (props) =>{
    return(
        <form className='formlistcrud' onSubmit={props.AddCourse}>
            <input className='forminputcrud' type='text' value={props.current} onChange={props.updateCourse} id='namee' />
            <button className='buttoncrud'>Add Course</button>
            
        </form>
    )
}
export default Formcrud;
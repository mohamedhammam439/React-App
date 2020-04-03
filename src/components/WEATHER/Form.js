import React from 'react';

const Form =(props) =>{
    return(
        <form onSubmit={props.getweather} className='formlist'>
            <input className='inputweather' type='text' placeholder='city' name='city' />
            <input className='inputweather' type='text' placeholder='country' name='country' />
            <button className='buttonweather'>Get Weather</button>
        </form>
    )
}
export default Form ;
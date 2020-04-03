import React from 'react';

const List =(props) =>{
    return(
        <div>
        {
            props.City && <p className='pweather'>City : {props.City}</p>
        }
        {
            props.Country && <p  className='pweather'>Country :  {props.Country}</p>
        }
        {
            props.Tempreature && <p  className='pweather'>Tempreature :  {props.Tempreature}</p>
        }
        {
            props.pressure && <p  className='pweather'>Pressure  {props.pressure}</p>
        }
        {
            props.humidity && <p  className='pweather'>Humidity : {props.humidity}</p>
        }
        {
            props.description && <p  className='pweather'>Description : {props.description}</p>
        }
        {
            props.error && <p  className='pweather'>Error : {props.error}</p>
        }   
        </div>
    )
}
export default List ;
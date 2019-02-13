import * as React from 'react'

export default function AdsDetail(props : any) {
    console.log(props.Ad)
   
    return(
        
        <div>          
            <h3>{props.Ad.title}</h3>
            <img src={props.Ad.picture}/>
            <p>Description: {props.Ad.description}</p>
            <p>€ {props.Ad.price}</p>
            <p><strong>Contact:</strong> Email: {props.Ad.email} or call: {props.Ad.phone_number}</p>
          

            </div>)

}
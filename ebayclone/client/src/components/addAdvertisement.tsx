import * as React from 'react'


export default function AddAdvertisement (props: any) {
    return(<div>
        <form onSubmit={props.onSubmit} >
            <label >Title: </label>
            <input type ='text' name="name" ></input>
            <br/>
            <label >Description: </label>
            <input type ='text' name="name" ></input>
            <br/>
            <label >Imagelink: </label>
            <input type ='text' name="name" ></input>
            <br/>
            <label >Price: </label>
            <input type = 'number' name="name"></input>
            <br/>
            <label >Email: </label>
            <input type ='text' name="name"></input>
            <br/>
            <label >Phone number: </label>
            <input type ='text' name="name"></input>
            <br/> 
            <button>Subit</button>          
        </form>
    </div>
    )
} 
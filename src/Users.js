import React from "react";

export default class User extends React.Component{
    constructor(){
        super();
        this.state={
            data: 0
        }
    }
    updateit(){
        this.setState({data:this.state.data+1})
    }

    render(){
        console.warn("&^^^^^^^")
        return(
        
            <div>
                <h1>{this.state.data}</h1>
                <p>hey dude what's up</p>
                <button onClick={()=>this.updateit()}>Update class data</button>
            </div>
        )
    }
}
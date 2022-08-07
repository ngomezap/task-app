import React from "react";
import uniqid from "uniqid";

export class Overview extends React.Component{

    constructor(props){
        super(props);
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }

    onButtonClicked(e){
        let arr = this.props.tasks;
        arr.push(document.querySelector('input').value);
        
        this.props.onClick(arr);
    }

    render(){

        let rows = [];
        console.log(uniqid())
        this.props.tasks.forEach((tk) => {
            rows.push(<li key={uniqid()}>{tk}</li>);
        })

        

        return(
            <div>
                <input type="text"></input>
                <button onClick={this.onButtonClicked}>
                    Adjuntar
                </button>
                <ul>
                    {rows}
                </ul>      
            </div>
        );
    }

}
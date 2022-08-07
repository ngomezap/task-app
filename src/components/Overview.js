import React from "react";
import uniqid from "uniqid";

export class Overview extends React.Component{

    constructor(props){
        super(props);
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.onDeleteButton = this.onDeleteButton.bind(this);
    }

    onButtonClicked(){
        let arr = this.props.tasks;
        arr.push({name: document.querySelector('input').value, id: uniqid()});
        
        this.props.onClick(arr);
    }

    onDeleteButton(e){
        let arr = this.props.tasks;
        let id = e.target.parentNode.id;
        arr = arr.filter((tk) => {
            return tk.id !== id;
        })

        this.props.onDelete(arr);
    }

    render(){

        let rows = [];
        console.log(uniqid())
        this.props.tasks.forEach((tk) => {
            rows.push(<li id={tk.id} key={tk.id}>{tk.name} <button onClick={this.onDeleteButton}>Borrar</button></li>);
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
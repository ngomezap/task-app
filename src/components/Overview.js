import React from "react";
import uniqid from "uniqid";

export class Overview extends React.Component{

    constructor(props){
        super(props);
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.onDeleteButton = this.onDeleteButton.bind(this);
        this.onEditButton = this.onEditButton.bind(this);
        this.onSubmitButton = this.onSubmitButton.bind(this);
    }

    onButtonClicked(){
        let arr = this.props.tasks;
        arr.push({
            name: document.querySelector('input').value,
            id: uniqid(),
            editmode: 'off'
        });
        
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

    onEditButton(e){
        let arr = this.props.tasks;
        let id = e.target.parentNode.id;
        arr = arr.map((tk) => {
            if(tk.id === id)
                tk.editmode = 'on';
            return tk;
        })

        this.props.onEdit(arr);
    }

    onSubmitButton(e){
        let arr = this.props.tasks;
        let id = e.target.parentNode.id;
        let input = document.querySelector(`#${id} > input`);
        
        arr = arr.map((tk) => {
            if(tk.id === id){
                tk.editmode = 'off';
                tk.name = input.value;
            }
            return tk;
        })

        this.props.onEdit(arr);
    }
    

    render(){

        let rows = [];
        console.log(uniqid())
        this.props.tasks.forEach((tk) => {
            if(tk.editmode === 'off'){
                rows.push(
                    <li id={tk.id} key={tk.id}>
                        <p>{tk.name}</p> 
                        <button onClick={this.onDeleteButton}>Borrar</button>
                        <button onClick={this.onEditButton}>Editar</button>
                    </li>);
            }else{
                rows.push(
                    <li id={tk.id} key={tk.id}>
                        <input type="text" defaultValue={tk.name}/> 
                        <button onClick={this.onDeleteButton}>Borrar</button>
                        <button onClick={this.onSubmitButton}>Submit</button>
                    </li>);
            }
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
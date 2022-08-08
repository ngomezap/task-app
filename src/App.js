import React from 'react';
import { Overview } from './components/Overview';
import './App.css'


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {tasks: []};
    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.onDeleteButton = this.onDeleteButton.bind(this);
    this.onEditButton = this.onEditButton.bind(this);
    this.onSubmitButton = this.onEditButton.bind(this);
  }

  onButtonClicked(taskArr){
    this.setState({
      tasks : taskArr
    })
  }

  onDeleteButton(taskArr){
    this.setState({
      tasks: taskArr
    })
  }

  onEditButton(taskArr){
    this.setState({
      tasks: taskArr
    });
  }

  onSubmitButton(taskArr){
    this.setState({
      tasks: taskArr
    });
  }

  render(){
    return (
      <Overview 
      onClick = {this.onButtonClicked}
      onDelete = {this.onDeleteButton}
      onEdit = {this.onEditButton} 
      tasks={this.state.tasks}/>
    );
  }
  
}

export default App;

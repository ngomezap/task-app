import React from 'react';
import { Overview } from './components/Overview';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {tasks: []};
    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.onDeleteButton = this.onDeleteButton.bind(this);
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

  render(){
    return (
      <Overview 
      onClick = {this.onButtonClicked}
      onDelete = {this.onDeleteButton} 
      tasks={this.state.tasks}/>
    );
  }
  
}

export default App;

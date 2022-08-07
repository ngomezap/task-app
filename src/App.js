import React from 'react';
import { Overview } from './components/Overview';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {tasks: []};
    this.onButtonClicked = this.onButtonClicked.bind(this);
  }

  onButtonClicked(task){
    this.setState({
      tasks : task
    })
  }


  render(){
    return (
      <Overview 
      onClick = {this.onButtonClicked} 
      tasks={this.state.tasks}/>
    );
  }
  
}

export default App;

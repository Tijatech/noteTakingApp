import React, { Component } from 'react';
import  {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

// Components
import Homepage from './components/Homepage'


class App extends Component {
  
  render(){
    return (
     <div>
       <Router>
         <Route path="/">
            <Homepage />
         </Route>
         <Route path="/notes">
           
         </Route>
       </Router>
     </div>
    
  );
  }
  
}

export default App;

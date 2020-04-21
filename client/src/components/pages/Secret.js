import React from 'react';
import { Link, Route} from 'react-router-dom';
import Home from './Home';

function Secret() {
        
  return (
    <div>
        <h1>Secret</h1>
        <ul>
          <li><Link to="/">Link to Home</Link></li>
        </ul>
  
          <Route path="/" exact component={Home} />
 
      </div>
    );
  }
export default Secret;
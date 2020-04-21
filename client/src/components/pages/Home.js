import React from 'react';
import { Link, Route} from 'react-router-dom';
import Secret from './Secret';

function Home() {
        
  return (
    <div>
      <h1>Home</h1>
        <ul>
          <li><Link to="/secret">Link to Secret</Link></li>
        </ul>
      
          <Route path="/secret" component={Secret} />
       
      </div>
    );
  }
export default Home;




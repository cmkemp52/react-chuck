import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
import Quote from './components/quotes';
import CategoryList from './components/categoryList';

function  App(){
  return (
    <div className="App">
      <header>
        <h1>Chuck says~</h1>
      </header>
      <Router>
        <nav>
        </nav>
        <Route path="/" exact>
          <CategoryList/>
        </Route>
        <Route path="/category/:category_name" component={Quote}/>
      </Router>
    </div>
  );
}

export default App;

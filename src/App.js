import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Wrapper from './components/wrapper'; 
import Quote from './components/quotes';
import CategoryList from './components/categoryList';


import "bulma/css/bulma.css"

function  App(){
  return (
    <div className="App">
      <header>
        <h1>Chuck says~</h1>
      </header>
      <Wrapper>
        <Router>
          <nav>
          </nav>
          <Route path="/" exact>
            <CategoryList/>
          </Route>
          <Route path="/category/:category_name" component={Quote}/>
        </Router>
      </Wrapper>
    </div>
  );
}

export default App;

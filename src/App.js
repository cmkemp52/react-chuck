import React, {Component} from 'react';
import Quote from './components/quotes';
import getCategories from './components/quotes';

class App extends Component{
  state = {
    category: "sport",
  }


  changeCategory = (category)=>{
    this.setState({
      category: category.target.value
    })
  }
  render(){
    const {category}=this.state;
    return (
      <div>
        <Quote category={category}/> 
        <br/>
        <getCategories/>
      </div>
    );
  }
}

export default App;

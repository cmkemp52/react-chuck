import React, {Component} from "react";
import {loadData} from "../utils/loadData";
import {Link} from "react-router-dom"


class getCategories extends Component{
    state = {
        categories: []
    }
    async componentDidMount(){
        const categories = await loadData("https://api.chucknorris.io/jokes/categories");
        this.setState({
            categories
        })
    }
    render(){
        const {categories} = this.state;
        return (
            <ul>
                {categories.map((category, id)=>{
                    return(
                        <li key={`category-${id}`}>
                            <Link to={`/category/${category}`}>{category}</Link>
                        </li>); 
                })}
            </ul>
        );
    }
}

export default getCategories;
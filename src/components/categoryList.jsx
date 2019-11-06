import React, {Component} from "react";
import {loadData} from "../utils/loadData";
import {Link} from "react-router-dom";

const ListOfCategories = props => {
    return (
        <ul>
            {props.categories.map((category, id) => {
                return <li key={`category-${id}>`}>
                    <Link to={`/category/${category}`}>{category}</Link>
                </li>
            })}
        </ul>
    )
}

class getCategories extends Component{
    state = {
        categories: null
    }
    async componentDidMount(){
        const categories = await this.getCategories();
        this.setState({
            categories
        })
    }
    getCategories = async() => {
        const categories = await loadData("https://api.chucknorris.io/jokes/categories");
        return categories;
    }
    render(){
        const {categories} = this.state;
        return (<>
                <ListOfCategories categories={categories}/>
            ) : (
                <p>Fetching Categories</p>
            )
            </>
        )
    }
}

export default getCategories;
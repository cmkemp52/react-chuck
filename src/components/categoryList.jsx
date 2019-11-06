import React, {Component} from "react";
import {loadData} from "../utils/loadData";


class getCategories extends Component(){
    state = {
        categories: []
    }
    async componentDidMount(){
        this.getCategories();
    }
    getCategories = async() => {
        const categories = await loadData("https://api.chucknorris.io/jokes/categories");
        this.setState({
            categories
        })
    }
    render(){
        const {categories} = this.state;
        return (<>
            {categories.map((category)=>{
            return <option value={category}>{category}</option>})}
            </>
        )
    }
}

export default getCategories;
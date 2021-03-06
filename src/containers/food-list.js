import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import { selectFood } from "../actions";


class FoodList extends Component {
    createFoodListItems(){
        let listItems=this.props.foods.map((eachFood)=>{
            return (
                <li key={eachFood.id} onClick={() => this.props.selectFood(eachFood)}>
                    Food's Name: {eachFood.name} - {eachFood.description}
                </li>
            );
        });
        return listItems;
    }


    render() {
        return (
            <ul>
                {this.createFoodListItems()}
            </ul>
        );
    }
}


function mapStateToProps(state){
    return{
        foods: state.foods
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectFood:selectFood}, dispatch);
}

let FoodContainer=connect(mapStateToProps,mapDispatchToProps)(FoodList)

export default FoodContainer;
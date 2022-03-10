import React, { Component } from 'react';


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
        this.ageBtnHandler = ()=>{
            this.setState({age:this.state.age +1})
        }
    }

    render() {
        return (
            <div>

                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.ageBtnHandler}>Birthday Button for {this.props.firstName}</button>
                <hr/>
            </div>
        )
    }
}

export default PersonCard;

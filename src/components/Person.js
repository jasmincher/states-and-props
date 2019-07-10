import React from 'react';
import { connect } from "react-redux";
import { nameChange } from '../actions';




class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = { firstName: '', lastName: '' };
    }


    changeFirst = (e) => {
        this.setState({
            firstName: e.target.value
        });
    }


    changeLast = (e) => {
        this.setState({
            lastName: e.target.value
        });
    }


    render() {
        return (
            <form>
                <h1>My name is: {this.props.name} {this.state.lastName}</h1>
                First Name: <br />
                <input type="text" onChange={(e) => this.props.dispatch(nameChange(e.target.value))} /> <br />
                Last Name: <br />
                <input type="text" onChange={this.changeLast} />
            </form>



        );
    }
}

const mapStateToProps = (state) => {
    const { name } = state;
    
    return name;
}


export default connect(mapStateToProps)(Person);


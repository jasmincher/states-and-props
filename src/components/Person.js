import React from 'react';

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: '', lastName: '' };

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
                <h1>My name is: {this.state.firstName} {this.state.lastName}</h1>
                First Name: <br />
                <input type="text" onChange={this.changeFirst} /> <br />
                Last Name: <br />
                <input type="text" onChange={this.changeLast} />
            </form>



        );
    }
}

export default Person;


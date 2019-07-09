import React from 'react';

class HairColor extends React.Component {


    constructor(props) {
        super(props);
        this.state = { color: '' };
    }

    red = () => {
        this.setState({
            color: 'rgb(105, 22, 3)'
        })
    }


    black = () => {
        this.setState({
            color: 'black'
        })
    }


    brown = () => {
        this.setState({
            color: 'rgb(87, 64, 14)'
        })
    }


    blonde = () => {
        this.setState({
            color: 'rgb(212, 196, 106)'
        })
    }




    render() {
        return (
            <div>

                <h1>My hair color is : 

               <br/> <span style={{ backgroundColor: this.state.color, color: this.state.color }}> .... </span>
                </h1>

                <button onClick={this.red}>Red</button>
                <button onClick={this.black}>Black</button>
                <button onClick={this.brown}>Brown</button>
                <button onClick={this.blonde}>Blonde</button>
                
            </div>

        );
    }
}

export default HairColor;


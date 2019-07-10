import React from 'react';
import { connect } from "react-redux";




class Feelings extends React.Component {
    constructor(props) {
        super(props);
        this.state = { face: ' ' };

    }

    happy = () => {
        this.setState({
            face: ' 😀'
        })
    }


    sad = () => {
        this.setState({
            face: ' 😥 '
        })
    }

    mad = () => {
        this.setState({
            face: ' 🤬'
        })
    }


    render() {
        return (

            <div>

                <h1>

                    {this.props.name}'s feeling right now: <br /> {this.state.face}
                </h1>
                <button onClick={this.happy}> Happy </button>
                <button onClick={this.sad}> Sad </button>
                <button onClick={this.mad}> Mad </button>


            </div>
        );
    }
}

const mapStateToProps = state => {
    const { name } = state;
    return name;

}


export default connect(mapStateToProps)(Feelings);

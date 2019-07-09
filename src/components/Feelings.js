import React from 'react';



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

export default Feelings;

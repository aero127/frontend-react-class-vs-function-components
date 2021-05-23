import React from 'react';
import './App.css';

function App() {
    const [isLightOn, setLightOn] = React.useState('');

    function handleClick(e) {
        setLightOn(!isLightOn);
    }
  return (
    <div>
        <button
            type="button"
            onClick={(e) => handleClick(e)}
            value={isLightOn}
        >{isLightOn ? 'AAN' : 'UIT'}
        </button>
    </div>
  );
}

export default App;


/*
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLightOn: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isLightOn: !this.state.isLightOn,
        });
    }

    render() {
        return (
            <button
                type="button"
                onClick={this.handleClick}
            >
                {this.state.isLightOn ? 'AAN' : 'UIT'}
            </button>
        );
    }
}

export default App;*/

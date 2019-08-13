import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <h1>hello world</h1>
                <p>trying to fix this crap</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
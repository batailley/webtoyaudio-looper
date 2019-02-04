import React, {Component} from 'react';
import Bob from './Bob.js'
import './App.css';

class App extends Component {
    options = {
        bpm: 120,
        barLength: 4,
        barsPerRow: 2,
        rowsPerScreen: 1
    };

    state = {
        currentTick: 0,
        tickDuration: null,
        totalTickLength: null
    }
    playSound(sound){
        console.log('boom');
    }
    play() {
        this.refInterval = setInterval(() => {
            let newTick = this.state.currentTick + 1;
            this.setState({currentTick: newTick > this.state.totalTickLength ? 0 : newTick})
        }, this.state.tickDuration)
    }
    stop() {
        clearInterval(this.refInterVal)
    }
    tempoMaker() {

    }
    initialise() {
        this.setState({
            tickDuration : this.options.bpm / (60 * this.options.barLength),
            totalTickLength :  this.options.barLength * this.options.barsPerRow
        })
    }
    componentDidMount() {
        this.initialise();
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.play.bind(this)}>play</button>
                <button onClick={this.stop.bind(this)}>stop</button>
                <Bob selected={true}
                     playing={false}
                     tick={this.state.currentTick}
                     position={this.state.currentTick}
                ></Bob>
            </div>
        );
    }
}

export default App;

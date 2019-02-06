import React, {Component} from 'react';
import Bob from './Bob.js'
import './App.css';

class App extends Component {
    /* they will be props */
    options = {
        bpm: 120,
        barLength: 4,
        barsPerRow: 2,
        rowsPerScreen: 1
    };

    state = {
        currentTick: 1,
        tickDuration: null,
        totalTickLength: null
    };

    constructor() {
        super();
        this._ticker = this.ticker.bind(this);
    }

    playSound(sound){
        console.log('boom');
    }

    ticker() {
        this.setState(prevState => ({
            currentTick: (prevState.currentTick + 1) > prevState.totalTickLength ? 0 : (prevState.currentTick + 1)
        }));
    }
    play() {
        this.refTickerInterval = setInterval(this._ticker, this.state.tickDuration)
    }

    stop() {
        clearInterval(this.refTickerInterval);
    }

    rowBuilder() {
        const {totalTickLength, currentTick} = this.state;
        const row = [];
        for (let i=1; i <= totalTickLength; i++) {
            row.push(
                <Bob playing={i === currentTick}
                     first={(i-1) % this.options.barLength === 0}
                     tick={i}
                     key={i}
                     currentTick={currentTick}
                     exec={this.playSound.bind(this)}
                ></Bob>
            )
        }

        return row;
    }

    barBuilder(bar) {
       // return bar.map((bob, index,) => { <Bob selected={true}
       //       playing={false}
       //       tick={this.state.currentTick}
       //       position={this.state.currentTick}
       //  ></Bob> })
    }

    initialise() {
        this.setState({
            tickDuration : (this.options.bpm / (60 * this.options.barLength)) * 1000,
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
                <div className={"row"}>
                    {this.rowBuilder()}
                </div>
            </div>
        );
    }
}

export default App;

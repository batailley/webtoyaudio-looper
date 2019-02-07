import React, {Component} from 'react';
import Bob from './Bob.js'
import {Howl, Howler} from 'howler';

import './App.css';

class App extends Component {
    /* they will be props */
    options = {
        bpm: 120,
        barLength: 4,
        barsPerRow: 2,
        rowsPerScreen: 3,
        soundsSrc: [
            './sounds/bd04.wav',
            './sounds/hh04.wav',
            './sounds/sd04.wav'
        ]
    };

    state = {
        currentTick: 1,
        rows: [],
        tickDuration: null,
        totalTickLength: null
    };

    constructor() {
        super();
        this._ticker = this.ticker.bind(this);
    }

    playSound(rowIndex) {
        let rows = this.state.rows;
        console.log(rows[rowIndex].sound);
        rows[rowIndex].sound.play();
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

    screenBuilder() {
        let screen = [];
        for (let i = 1; i <= this.options.rowsPerScreen; i++) {
            screen.push(
                <div className={"row"} key={i}>
                    {this.rowBuilder(i)}
                </div>
            )
        }
        return screen;
    }

    rowBuilder(rowIndex) {
        const {totalTickLength, currentTick} = this.state;
        const row = [];

        for (let i = 1; i <= totalTickLength; i++) {
            row.push(
                <Bob playing={i === currentTick}
                     first={(i - 1) % this.options.barLength === 0}
                     tick={i}
                     key={i}
                     currentTick={currentTick}
                     playSound={this.playSound.bind(this)}
                     rowIndex={rowIndex}
                > </Bob>
            )
        }

        return row;
    }

    initialise() {
        //metrics
        this.setState({
            tickDuration: (this.options.bpm / (60 * this.options.barLength)) * 1000,
            totalTickLength: this.options.barLength * this.options.barsPerRow
        });
        let rows = [];
        for (let i = 0; i <= this.options.rowsPerScreen; i++) {
            let sound = new Howl({
                src: [this.options.soundsSrc[i]]
            });
            rows.push({sound})
        }
        this.setState({
            rows:rows
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
                <div className={"rows"}>
                    {this.screenBuilder()}
                </div>
            </div>
        );
    }
}

export default App;

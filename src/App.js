import React, {Component} from 'react';
import Bob from './Bob.js'
import {Howl, Howler} from 'howler';

import './App.css';

class App extends Component {
    /* they will be props */
    options = {
        bpm: 120,
        barLength: 4,
        barsPerRow: 4,
        rowsPerScreen: 6,
        soundsSrc: [
            './sounds/bd04.wav',
            './sounds/hh04.wav',
            './sounds/sd04.wav',
            './sounds/cp02.wav',
            './sounds/hh01.wav',
            './sounds/hh02.wav',
            './sounds/oh02.wav',
        ]
    };

    state = {
        currentTick: 1,
        rows: [],
        tickDuration: null,
        totalTickLength: null,
        playing: false,
        pattern: 1
    };

    constructor() {
        super();
        this._ticker = this.ticker.bind(this);
    }

    playSound(rowIndex) {
        let rows = this.state.rows;
        rows[rowIndex].sound.play();
    }

    ticker() {
        this.setState(prevState => ({
            currentTick: (prevState.currentTick + 1) > prevState.totalTickLength ? 1 : (prevState.currentTick + 1)
        }));
    }

    play() {
        if (this.state.playing) {
            this.stop();
        } else {
            this.setState(prevState => ({
                playing: true
            }));
            this.refTickerInterval = setInterval(this._ticker, this.state.tickDuration);
        }
    }

    stop() {
        clearInterval(this.refTickerInterval);
        this.setState(prevState => ({
            playing: false
        }));
    }

    screenBuilder() {
        let screen = [];
        for (let i = 1; i <= this.options.rowsPerScreen; i++) {
            screen.push(
                <div className={"row"} key={i}>
                    <div className={"row-header"}>
                        <span className="row-number">{i}</span>
                        <span>{this.options.soundsSrc[i - 1]}</span>
                    </div>
                    <div className={"row-content"}>
                        {this.rowBuilder(i - 1)}
                    </div>
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
            tickDuration: (60) / (this.options.bpm * this.options.barLength) * 1000,
            totalTickLength: this.options.barLength * this.options.barsPerRow
        });
        let rows = [];
        for (let i = 1; i <= this.options.rowsPerScreen; i++) {
            let sound = new Howl({
                src: [this.options.soundsSrc[i - 1]]
            });
            rows.push({sound})
        }
        console.log(rows);
        this.setState({
            rows: rows
        })
    }

    componentDidMount() {
        this.initialise();
    }

    render() {
        let play = this.state.playing ? "play" : "";
        return (
            <div className="App">
                <div className="track-header">
                    <button className={"btn btn-play " + play} onClick={this.play.bind(this)}>play</button>
                    <button className={"btn btn-stop " + play} onClick={this.stop.bind(this)}>stop</button>
                    <div className={"track-info"}><span className={"bpm"}>bpm: </span>{this.options.bpm}</div>
                    <div className={"track-info"}><span className={"pattern"}>Pattern: </span>{this.state.pattern}</div>
                    <div className={"track-info"}><span className={"tracks"}>Tracks: </span>{this.state.rows.length}</div>
                    <div className={"track-info"}><span className={"tick"}>Tick: </span>{this.state.currentTick}</div>
                </div>
                <div className={"rows"}>
                    {this.screenBuilder()}
                </div>
            </div>
        );
    }
}

export default App;

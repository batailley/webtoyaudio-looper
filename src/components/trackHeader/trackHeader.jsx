import React from 'react';

const Header = ({ todos, onClick }) => (
  <div className="track-header">
    <button className={"btn btn-play "} name="TRANSPORT>PLAY">play</button>
    <button className={"btn btn-stop "} name="TRANSPORT>STOP">>stop</button>
    <div className={"track-info"}><span className={"bpm"}>bpm: </span>{this.options.bpm}</div>
    <div className={"track-info"}><span className={"pattern"}>Pattern: </span>{this.state.pattern}</div>
    <div className={"track-info"}><span className={"tracks"}>Tracks: </span>{this.state.rows.length}</div>
    <div className={"track-info"}><span className={"tick"}>Tick: </span>{this.state.currentTick}</div>
</div>
)

export default Header
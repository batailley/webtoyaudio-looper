import React, {Component} from 'react';
import './Bob.css';

class Bob extends Component {
    state = {
        selected:false
    };
    selectToggle() {
        this.setState(prevState => ({
            selected: !prevState.selected
        }));
    }

    render() {
        const {playing, tick, currentTick, first} = this.props;

        return <div
        onClick={this.selectToggle.bind(this)}
            className={'bob' +
        (first ? ' first' : ' ') +
        (playing ? ' playing' : ' ') +
        (this.state.selected ? ' selected' : '')
        }>
            {tick} {currentTick}
        </div>
    }
}

export default Bob
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
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.playing && this.state.selected) {
            nextProps.playSound(this.props.rowIndex);
        }
    }

    render() {
        const {playing, first} = this.props;

        return <div
        onClick={this.selectToggle.bind(this)}
            className={'bob' +
        (first ? ' first' : ' ') +
        (playing ? ' playing' : ' ') +
        (this.state.selected ? ' selected' : '')
        }>
        </div>
    }
}

export default Bob
import React, {Component} from 'react';
import './Bob.css';

class Bob extends Component {
    render() {
        const {playing, selected, tick} = this.props;

        return <div className={'bob' +
        (playing ? ' playing' : ' ') +
        (selected ? ' selected' : '')
        }>{tick}</div>
    }
}

export default Bob
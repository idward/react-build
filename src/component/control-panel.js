import React, {Component} from 'react';
import Counter from './counter';
import store from '../store/store';

class ControlPanel extends Component {
    constructor() {
        super();
        this.state = this.getOwnState();
        this.onChange = this.onChange.bind(this);
    }

    getOwnState() {
        const state = store.getState();
        let totalAmount = 0;

        for (const key in state) {
            if (state.hasOwnProperty(key)) {
                totalAmount += state[key];
            }
        }

        return {sum: totalAmount};
    }

    onChange(){
        this.setState(this.getOwnState);
    }

    render() {
        return (
            <div>
                <Counter caption="First"/>
                <Counter caption="Second"/>
                <Counter caption="Third"/>
                <hr/>
                <p>
                    TotalAmount: {this.state.sum}
                </p>
                <p>
                    <button onClick={() => this.forceUpdate()}>Click me to repaint</button>
                </p>
            </div>
        );
    }

    componentDidMount(){
        store.subscribe(this.onChange);
    }

    componentWillUnMount(){
        store.unsubscribe(this.onChange);
    }
}

export default ControlPanel;

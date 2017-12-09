import React, {Component} from 'react';
import Counter from './counter';

class ControlPanel extends Component {
    constructor() {
        super();
        this.values = [10, 20, 30];

        const sumValues = this.values.reduce((a, b) => {
            return a + b;
        }, 0);

        this.state = {
            totalAmt: sumValues
        };

        this.calTotalAmt = this.calTotalAmt.bind(this);
    }

    calTotalAmt(oldValue, newValue) {
        const changeValues = newValue - oldValue;
        this.setState({
            totalAmt: this.state.totalAmt + changeValues
        });
    }

    render() {
        return (
            <div>
                <Counter caption="First" initialValue={this.values[0]} onCalAmount={this.calTotalAmt}/>
                <Counter caption="Second" initialValue={this.values[1]} onCalAmount={this.calTotalAmt}/>
                <Counter caption="Third" initialValue={this.values[2]} onCalAmount={this.calTotalAmt}/>
                <hr/>
                <p>
                    TotalAmount: {this.state.totalAmt}
                </p>
                <p>
                    <button onClick={() => this.forceUpdate()}>Click me to repaint</button>
                </p>
            </div>
        );
    }
}

export default ControlPanel;

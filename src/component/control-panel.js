import React, {Component} from 'react';
import Counter from './counter';

class ControlPanel extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Counter caption="First" />
                <Counter caption="Second" />
                <Counter caption="Third" />
                <hr/>
                <p>
                    TotalAmount: {}
                </p>
                <p>
                    <button onClick={() => this.forceUpdate()}>Click me to repaint</button>
                </p>
            </div>
        );
    }
}

export default ControlPanel;

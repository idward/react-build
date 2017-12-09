import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialValue
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        const oldValue = this.state.count;
        const newValue = this.state.count + 1;

        this.setState({
            count: newValue
        });

        this.props.onCalAmount(oldValue, newValue);
    }

    decrement() {
        const oldValue = this.state.count;
        const newValue = this.state.count - 1;

        this.setState({
            count: newValue
        });

        this.props.onCalAmount(oldValue, newValue);
    }

    //组件将要加载
    componentWillMount() {
        console.log(this.props.caption + ': componentWillMount');
    }

    //外部传入的Prop值发生改变
    componentWillReceiveProps(nextProps) {
        console.log(this.props.caption + ': componentWillReceiveProps');
    }

    //提高性能的重要方法，决定组件需不需要被渲染
    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props.caption + ": shouldComponentUpdate");
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count);
    }

    componentWillUpdate() {
        console.log(this.props.caption + ': componentWillUpdate');
    }

    //生成JSX数据模型机构，然后和VirtualDom中的模型结构对比发现差异，最后交由React渲染
    render() {
        console.log(this.props.caption + ': render');
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <p>
                    {this.props.caption} Value: {this.state.count}
                </p>
            </div>
        );
    }

    componentDidUpdate() {
        console.log(this.props.caption + ': componentDidUpdate');
    }

    //组件加载完毕（所有的Dom树形节点已经渲染完毕）
    componentDidMount() {
        console.log(this.props.caption + ': componentDidMount');
    }

    //组件卸载　
    componentWillUnMount() {
        console.log(this.props.caption + ': componentWillUnMount');
    }
}

export default Counter;

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initialValue: PropTypes.number,
    onCalAmount: PropTypes.func
}

Counter.defaultPropTypes = {
    initialValue: 0,
    onCalAmount: f => f //默认函数
}

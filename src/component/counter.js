import React, {Component} from 'react';
import PropTypes from 'prop-types';
import store from '../store/store';
import * as actions from '../actions/counter.action';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = this.getOwnState();
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    getOwnState() {
        return {count: store.getState()[this.props.caption]};
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    increment() {
        debugger;
        store.dispatch(actions.increment(this.props.caption));
    }

    decrement() {
        debugger;
        store.dispatch(actions.decrement(this.props.caption));
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
        store.subscribe(this.onChange);
    }

    //组件卸载　
    componentWillUnMount() {
        console.log(this.props.caption + ': componentWillUnMount');
    }
}

export default Counter;

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    // initialValue: PropTypes.number,
    // onCalAmount: PropTypes.func
}

Counter.defaultPropTypes = {
    // initialValue: 0,
    // onCalAmount: f => f //默认函数
}

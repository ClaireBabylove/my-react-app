import React from 'react';
import PropTypes from 'prop-types'; // 类型检测

class Context extends React.Component{
    getChildContext() {
        return {color:'purple'}
    }
    constructor(props) {
        super(props)
        this.state = {
            name: 'react'
        }
    }
    render () {
        return (
            <div>
                {this.state.name}
                <Son />
            </div>
        )
    }
}
Context.childContextTypes = {
    color: PropTypes.string
}

class Son extends React.Component{
    render() {
        return(
            <div>
                <GrandSon />
            </div>
        )
    }
}

class GrandSon extends React.Component{
    render() {
        return(
            <div>{this.context.color}</div>
        )
    }
}

GrandSon.contextTypes = {
    color: PropTypes.string
}

export default Context

// 上下文：解决组件在嵌套层次比较深的时候，如何从最外层组件传到最内层组件
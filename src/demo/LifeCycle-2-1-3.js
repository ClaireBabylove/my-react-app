import React from 'react';

class LifeCycle extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: 'react'
        }
    }
    render () {
        console.log('LifeCycle render')
        return (
            <div>
            {this.state.name}
            {this.state.name && <Son name={this.state.name + '-son'} />}
            </div>
        )
    }
    componentDidMount() {
        window.LifeCycle = this
        console.log('LifeCycle mount')
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('LifeCycle will update')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('LifeCycle did update')
    }
    componentWillUnmount() {
        console.log('LifeCycle willUnmount')
    }
}

class Son extends React.Component{
    render() {
        console.log('Son render')
        return(
            <div>
            {this.props.name}
            <GrandSon name={this.props.name + '-granson'} />
            </div>
        )
    }
    componentDidMount() {
        console.log('Son mount')
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Son will update')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Son did update')
    }
    componentWillUnmount() {
        console.log('Son willUnmount')
    }
}

class GrandSon extends React.Component{
    render() {
        console.log('GrandSon render')
        return(
            <div>{this.props.name}</div>
        )
    }
    componentDidMount() {
        console.log('GrandSon mount')
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('GrandSon will update')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('GrandSon did update')
    }
    componentWillUnmount() {
        console.log('GrandSon willUnmount')
    }
}

export default LifeCycle


// 创建期：依次打印
// LifeCycle render:只是开始执行渲染函数，当组件渲染完后，依次回调父组件的生命周期函数。
// Son render
// GrandSon render
// GrandSon mount
// Son Mount
// LifeCycle mount

// 存在期：
// 当执行 LifeCycle.setState({name: 'vue'})时打印顺序如下
// LifeCycle will update
// LifeCycle render
// Son will update
// Son render
// GrandSon will update
// GrandSon render
// GrandSon did update
// Son did update
// LifeCycle did update

// 销毁期：
// 当执行LifeCycle.setState({name: ''})时，打印顺序如下
// LifeCycle will update
// LifeCycle render
// Son willUnmount
// GrandSon willUnmount
// LifeCycle did update


// 生命周期
// 创建期：
// 存在期：
// 销毁期：
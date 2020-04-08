import React from 'react';
import PropTypes from 'prop-types'; // 类型检测

class Provider extends React.Component {
    getChildContext () {
        return this.props.store
    }
    static childContextTypes = {
        name: PropTypes.string,
        age: PropTypes.number
    }
    constructor(props) {
        super(props)
        this.state = {
            name: 'provider-user'
        }
    }
    render() {
        return this.props.children
    }
}

class BaseUSer extends React.Component{
    render() {
        return(
            <div>{this.props.name}</div>
        )
    }
}

class BasePost extends React.Component{
    render() {
        return(
            <div>{this.props.age}</div>
        )
    }
}

const connect = (Com) => {
    class ConnectComponent extends React.Component {
        static contextTypes = Provider.childContextTypes
        displayName = Com.displayName

        render() {
            return(
                <Com {...this.context} />
            )
        }
    }
    return ConnectComponent
}

const User = connect(BaseUSer)
const Post = connect(BasePost)
const store = {
    name: 'ryan',
    age: 10
}

class RT extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <div>
                    <User />
                    <Post />
                </div>
            </Provider>
        )
    }
}
export default RT

// Provider：全局数据管理组件
// store：数据源
//属性代理
// 疑问：
// 1、this.props.children
// 2、this.context
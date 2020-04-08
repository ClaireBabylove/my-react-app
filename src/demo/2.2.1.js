import React from 'react'

class Provider extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: 'provider-user'
        }
    }
    render() {
        return this.props.render(this.state.name)
    }
}

class User extends React.Component{
    render() {
        return(
            <div>{this.props.data}</div>
        )
    }
}

class DW extends React.Component {
    render() {
        return(
            <Provider render={(data) => <User data={data} />} />
        )
    }
}


export default DW

//render渲染属性：解决有状态组件的可复用问题
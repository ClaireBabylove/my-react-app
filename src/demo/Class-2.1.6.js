import React from 'react';

// class LoadingComponent extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//             loading: false
//         }
//     }

//     render() {
//         const {
//             loading
//         } = this.state
//         return(
//             <div>{loading ? 'loading....' : ''}</div>
//         )
//     }

//     showLoading() {
//         this.setState({
//             loading: true
//         })
//     }
//     hideLoading() {
//         this.setState({
//             loading: false
//         })
//     }
// }

// class Cl extends LoadingComponent{
//     render() {
//         return(
//             <div>
//                 {super.render()}
//                 Cl
//             </div>
//         )
//     }
//     componentDidMount() {
//         this.showLoading()
//         setTimeout(() => {
//             this.hideLoading()
//         },3000)
//     }
// }

class LoadingComponent extends React.Component{
    render() {
        const loading = this.props.loading
        return(
            <div>{loading ? 'loading....' : ''}</div>
        )
    }
}

class Cl extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    switchLoading = () => {
        this.setState({
            loading: !this.state.loading
        })
    }

    render() {
        const loading = this.state.loading
        return(
            <div>
                <LoadingComponent loading={loading} switchLoading={this.switchLoading} />
                Cl
            </div>
        )
    }
    componentDidMount() {
        this.switchLoading()
        setTimeout(() => {
            this.switchLoading()
        },3000)
    }
}

export default Cl

// Cl有render方法，注释后，由于继承了LoadingComponent所以，LoadingComponent中的render渲染loading；
// Cl中的render不注释，则覆盖了LoadingComponent中的render，所以只显示Cl
// 同时熏染Cl、LoadingComponent中的Dom结构需要：{super.render()}
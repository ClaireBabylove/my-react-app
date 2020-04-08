import React from 'react';

let loading = (Com) => {
    class LoadingComponent extends Com {
            constructor(props) {
            super(props)
            this.state = {
                loading: false
            }
        }

        render() {
            const {
                loading
            } = this.state
            return(
                {super.render()}
                <div>{loading ? 'loading....' : ''}</div>
            )
        }
        showLoading() {
            this.setState({
                loading: true
            })
        }
        hideLoading() {
            this.setState({
                loading: false
            })
        }
    }
}

@loading
class Cl extends LoadingComponent{
    render() {
        return(
            <div>
                Cl
            </div>
        )
    }
    componentDidMount() {
        this.showLoading()
        setTimeout(() => {
            this.hideLoading()
        },3000)
    }
}

export default Cl

// @loading装饰器，
// @loading 等同于 let NewApp = loading(App)
// LoadingComponent继承Cl，所以将{super.render()}写在LoadingComponent里
// 示例用法为：反向继承
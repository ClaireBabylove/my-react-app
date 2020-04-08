import React, {useState, useEffect} from 'react'

//class ClassComponent extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//             time: 1,
//             age: 10
//         }
//     }

//     Add = () => {
//         this.setState({
//             time: this.state.time + 1
//         })
//     }
//     SetAge = () => {
//         this.setState({
//             age: this.state.age - 1
//         })
//     } 

//     componentDidMount() {
//         console.log('hello')
//     }
//     componentDidUpdate(preProps, preState) {
//         console.log('abc')
//     }
//     // 做性能优化
//     shouldComponentUpdate(preProps, preState) {
//         // console.log(preProps, preState)
//         console.log(123)
//         return true
//     }

//     componentWillUnMount() {

//     }

//     render() {
//         return(
//             <div>
//                 <p>{this.props.name}</p>
//                 <p>{this.state.time}</p>
//                 <p>{this.state.age}</p>
//                 <button onClick={this.Add}>add</button>
//                 <button onClick={this.SetAge}>add</button>
//             </div>
//         )
//     }
// }

// let bool = true
const ClassComponent = (props) => {
    // 函数式组件中定义状态，并赋初始值
    // 返回数组，第一项time：状态，初始值0，第二项setTime：修改状态的函数
    let [time, setTime] = useState(0)
    let [age, setAge] = useState(10)

    // 函数式组件不能条件式的定义状态，组件在生命周期过程中，数据有变化，但不会缺失，
    //即需要每次定义状态都需要一致的。
    // if (bool) {
    //     let [sex, setSex] = useState('man')
    // }

    // 每点击一次都会执行一次hello，
    //因为useEffect将componentDidMount、componentDidUpdate两个方法合在了一起;
    //如果要区分两个方法，则第二个传参为空数组
    // useEffect(() => {
    //     console.log('hello')
    // }, [])

    // 传入age时输出hello
    // useEffect(() => {
    //     console.log('hello')
    // }, [age])

    useEffect(() => {
        console.log('hello')
        // return () = > {
        //     console.log('status clear')
        // }
    }, [age])

    return(
        <div>
            <p>{props.name}</p>
            <p>{time}</p>
            <p>{age}</p>
            <button onClick={(e) => setTime(time + 1)}>add</button>
            <button onClick={(e) => setAge(age - 1)}>add</button>
        </div>
    )
}

export default ClassComponent
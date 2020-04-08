import React from 'react'

// class Child extends React.Component{
//      render() {
//          return (
//               <div>
//                        {this.props.name}
//               </div>
//          );
//      }
//      componentDidMount() {
//              console.log('mount',this.props.name)
//      }
//      componentDidUpdate() {
//              console.log('update',this.props.name)
//      }
//      componentWillUnmount() {
//              console.log('unmount',this.props.name)
//      }
  
// }
// class Parent extends React.Component{
//      state = {
//              list: ['a','b','c']
//      }
//      render() {
//          return (
//               <div>
//                    {this.state.list.map(item => <Child key={item} name={item}/>)}
//                    <button onClick={e => {
//                             this.setState({
//                                     list: ['b','c','d']
//                             })
//                    }}>set</button>
//               </div>
//          );
//      }
// }



class Parent extends React.Component{
    state = {
        num: 1
    }
    render() {
        return (
            <div>
                sss
            </div>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.num)
    }
    componentDidMount() {
        setTimeout(() => {
            console.log('timeout')
        })
        new Promise((resovle) => {
            console.log('before')
            resovle('then')
            console.log('after')
        }).then(res => {
            console.log(res)
        })
        
        let {num} = this.state
        this.setState({
            num: ++num
        }, () => {
            console.log('after setState')
        }, () => {
            console.log('呵呵哒')
        })
        console.log('---')
    }
}

// 执行顺序：同步执行的代码-》 promise.then ->setTimeout
// 打印： before after --- 2 after setState then timeout
// 疑问： 为何不执行呵呵哒

// class Parent extends React.Component{
//     state = {
//         num: 1
//     }
//     render() {
//         return (
//             <div>
//                 sss
//             </div>
//         );
//     }
//     componentDidUpdate(prevProps, prevState) {
//         console.log(this.state.num)
//     }
//     componentDidMount() {
//         let { num } = this.state
//         this.setState({
//             num: ++num
//         })
//         this.setState({
//             num: ++num
//         })
//     }
// }

// // 打印 3

// class Child extends React.Component{
//     render() {
//         return (
//             <div>
//                 {this.props.name}
//             </div>
//         );
//     }
//     componentDidMount() {
//         console.log('mount',this.props.name)
//     }
//     componentDidUpdate() {
//         console.log('update',this.props.name)
//     }
//     componentWillUnmount() {
//         console.log('unmount',this.props.name)
//     }
 
// }
// class Parent extends React.Component{
//     state = {
//         list: ['a','b','c']
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.list.map(item => <Child key={item}  name={item}/>)}
//                 <button onClick={e => {
//                     this.setState({
//                         list: ['b','c','d']
//                     })
//                 }}>set</button>
//             </div>
//         );
//     }
// }

// 添加key 则执行 unmount a、 update b、 update c、 mount d
// 不添加key 则执行 update b、 update c、 update d




// class Child extends React.Component{
//     render() {
//         console.log('child render')
//         return (
//             <div>
//                 {this.props.name}
//             </div>
//         );
//     }
 
//     componentDidUpdate(prevProps, prevState) {
//         console.log('child update')
//     }
// }
 
// class Parent extends React.Component{
//     state = {
//         name: 'aaa'
//     }
//     render() {
//         console.log('parent render')
//         return (
//             <div>
//                 <Child name={this.state.name}/>
//                 <button onClick={e => {
 
//                     this.setState({name:'bbb'})
//                 }}>change</button>
//             </div>
//         );
//     }
//     componentDidUpdate(prevProps, prevState) {
//         console.log('parent update')
//     }
// }


// setTimeout(function() {
//     console.log(1)
// }, 0);
// new Promise(function(resolve, reject) {
//     console.log(2)
//     for (var i = 0; i < 10000; i++) {
//         if(i === 10) {
//             console.log(10)
//         }
//         i == 9999 && resolve();
//     }
//     console.log(3)
// }).then(function() {
//     console.log(4)
// })
// console.log(5);

//打印结果：2、10、3、5、4、1

export default Parent
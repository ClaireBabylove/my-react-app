import React from 'react';

class User extends React.Component{
    render() {
        const {
            name,
            lesson,
            ...rest
        } = this.props
        return(
            <div {...rest}>
            {name} = {lesson}
            </div>
        )
    }
}

class Test extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: 'React & es6',
            lesson: '6',
        }
        // this.state = {
        //     name: 'React & es6',
        //     lesson: '6',
        //     teacher:{
        //         teacherName: 'ryan',
        //         age: '30'
        //     },
        //     obj: {
        //         name: 'wow'
        //     }
        // }
    }

    render() {
        // let {
        //     name,
        //     lesson,
        //     teacher: {
        //         teacherName,
        //         age
        //     },
        //     obj: {
        //         name: objName
        //     }
        // } = this.state
        let {
            name,
            lesson,
        } = this.state
        return(
            <div>
                <User name={name} lesson={lesson} style={{color: 'red'}}
                onClick={()=>{alert('hello')}}
                onMouseOver={()=>{console.log('aaa')}}
                 />
            </div>
        )
        // return(
        //     <div>
        //         <p>{name} - {lesson}</p>
        //         // <p>{teacherName} - {age}</p>
        //         // <p>{objName}</p>
        //         <User name={name} lesson={lesson} style={{color: 'red'}}
        //         onClick={()=>{alert('hello')}}
        //         onMouseOVer={()=>{console.log('aaa')}}
        //          />
        //     </div>
        // )
    }
}

export default Test

// 解构赋值: 对象、数组的结构赋值
// 
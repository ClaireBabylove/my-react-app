import React from 'react'

// Ts基础
// str类型为string，初始值为2
let str : string = 'Claire'
let num: number = 624

console.log(str, num)

interface IPerson {
    name: string,
    age: number
}

// 接口 list中某一项的类型
let personList : Array<IPerson> = [
    {
        name: 'Eden',
        age: 4
    },
    {
        name: 'Aciel',
        age: '2d'
    }
]

console.log(personList)

// 接口传参
interface ISumInterface {
    (x:number, y:number): number // 传参、返回值都为number类型
}


class Ts extends React.Component{
    render() {
        return(
            <div>Ts</div>
        )
    }
} 
export default Ts
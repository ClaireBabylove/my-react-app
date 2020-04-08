import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
 
// function getGreeting(user) {
//     if (user) {
//         return <h1>Hello, {formatName(user)}</h1>
//     }

//     return <h1>Hello, Stranger.</h1>
// }

// function formatName(user) {
//     return user.firstName + '' + user.lastName;
// }

// const user = {
//     firstName: 'yan',
//     lastName: 'mingmei'
// }


// class Hp extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>
//     }
// }

// function Hp(props) {
//     return <h1>Hello, {props.name}</h1>
// }

// const element = <Hp name= 'Sara' />

ReactDOM.render(
    // element,
    <App />,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, {useState} from 'react';
import './App.css';

function InputNumber(props) {
  return <input value={props.value} onChange={props.onChange} />
}

// 请实现支持如下代码的InputNumber组件，可以受控和非受控。
// 受控组件：必须有value和Onchange,当输入框输入时才会有变化，必须使用setState
// 非受控组件：default，，无需使用setState
function App() {
  const [value, setValue] = useState('aaa')
  console.log(value)
  return (
      <div>
          <InputNumber value={value} onChange={(e) => {setValue(e.target.value)}}/>
          <InputNumber defaultValue={value} onChange={e=>{setValue(e.target.value)}}/>            
      </div>
  )
}

export default App;

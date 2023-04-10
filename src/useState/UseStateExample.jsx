import React,{useState} from 'react'

export default function UseStateExample() {
    const [count, setCount] = useState(0);

    return (
      <div className=' flex justify-center items-center flex-col space-y-1'>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
}

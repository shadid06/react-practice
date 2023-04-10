import React,  { useState, useEffect } from 'react'

export default function UseEffectExample() {
    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const json = await response.json();
        setData(json);
      }
      fetchData();
    }, []);
  
    return (
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    );
}

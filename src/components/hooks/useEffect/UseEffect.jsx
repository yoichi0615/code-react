import { useState, useEffect } from "react";

export const UseEffect = () => {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    //mounted
    useEffect(() => {
        console.log('useEffect実行')
    }, [count])
  
    return (
      <div>
        <h1>Learn useEffect</h1>
        <h2>Count: { count }/ Count2: { count2 }</h2>
        <button onClick={() => setCount(count+1)}>Count+</button>
        <button onClick={() => setCount2(count2+1)}>Count2+</button>
      </div>
    );
  }
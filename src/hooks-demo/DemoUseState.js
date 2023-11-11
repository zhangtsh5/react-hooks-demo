import React, { useState } from 'react';

export default function DemoUseState() {
    // 初始化 state，计数器初始值为0  
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    // const increment = () => {
    //     setCount(prevCount => prevCount + 1)
    // }

    return (
        <div>
            <p>当前计数：{count}</p>
            <button style={{ padding: '10px 20px'}} onClick={increment}>增加</button>
        </div>
    );
}
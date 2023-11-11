import React, { useState, useCallback } from 'react';

export default function DemoUseCallback() {
    // 初始化 state，计数器初始值为0  
    const [count, setCount] = useState(0);

    // 使用 useCallback 创建 increment 函数，使其在组件重新渲染时保持一致性  
    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []); // 注意，依赖项数组为空，这意味着 increment 函数不会因为父组件的渲染而改变  

    return (
        <div>
            <p>当前计数：{count}</p>
            <button onClick={increment}>增加</button>
        </div>
    );
}

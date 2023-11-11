import React, { useState, useEffect } from 'react';

export default function DemoUseEffect() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    // 1、不传递依赖项
    useEffect(() => {
        console.log('当前计数器值为：', count);
    });

    // 2、依赖项数组传递空数组
    // useEffect(() => {
    //     console.log('初始值为', 0);
    // }, []);

    // 3、传递依赖项
    // useEffect(() => {
    //     console.log('当前计数器值为：', count);
    // }, [count]);

    // 4、return 一个函数

    return (
        <div>
            <p>当前计数：{count}</p>
            <button style={{ padding: '10px 20px'}} onClick={increment}>增加</button>
        </div>
    );
}
import React, { createElement as h } from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';

const data = {
    greetingMessage: ['hello!', 'react.'],
    message: '리액트는 사용자 인터페이스 구축을 위한 JavaScript 오픈소스 라이브러리입니다.',
};

const createApp = (
    // data
    // [0] data
    // [3] 2차 구조분해할당 가능
    {
        greetingMessage: [firstMessage, lastMessage],
        message
    },
    // options
    options = {} // [ES6 Core] default parameter
) => {

    // [1]
    // const { greetingMessage, message } = data // {greetingMessage, message} 구조분해할당 가능

    console.log(options) // { isDisabled: true }

    return (
        <div id="app">
            <h1>
                {firstMessage.toUpperCase()}
                {/* JSX 주석 (comment) */}
                {/* <br /> */}
                {' '},
                {lastMessage.toUpperCase()}
            </h1>
            <p>{message}</p>
            <form>
                {/* ❌ 유효하지 않음 (invalid) */}
                {/* <input aria-label='중요도' type="range" disabled="optionsd.isDisabled" /> */}
                {/* ✅ 유효함 (valid) */}
                {/* props 또한 {} 안에 값을 끼워넣을 수 있음 */}
                <input 
                    type="range"
                    min={options.min}
                    max={options.max}
                    step={options.step}
                    aria-label={options.label} 
                    disabled={options.isDisabled} 
                />
                <button type="submit">보내기</button>
            </form>
        </div>
    );
};

const rootElement = document.getElementById('root');
const reactDomRoot = createRoot(rootElement);

reactDomRoot.render(
    createApp(
        data,
        /* options 객체 */
        { 
            label: '중요도', 
            isDisabled: false, 
            min: 0, 
            step: 1, 
            max: 20 
        }
    )
);

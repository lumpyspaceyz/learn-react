import React from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';

const data = {
    greetingMessage: ['안녕!', '리액트.'],
    message: '리액트는 사용자 인터페이스 구축을 위한 JavaScript 오픈소스 라이브러리입니다.',
};

const anotherData = {
    greetingMessage: ['행복한 아침이야', '오늘도 좋은 하루 되렴~'],
    message: '나날이 성장하는 여러분을 보는 즐거움이 쏠쏠~'
}

const createApp = (mode) => (
    <div id="app">
        <h1>{mode.greetingMessage[0]}<br />{mode.greetingMessage[1]}</h1>
        <p>{mode.message}</p>
    </div>
);

const rootElement = document.getElementById('root');
const reactDomRoot = createRoot(rootElement);

/* 함수 실행 => JSX -> React.createElement() -> 리액트 요소 : ReactElement */
function render(mode = 'data') {
    reactDomRoot.render(createApp(mode === 'data' ? data : anotherData));
}

render()

// 버튼 이벤트 핸들링
const button = document.querySelector('button');

// 데이터 전환을 위한 상태 변수
let mode = 'data'; // 'data' | 'anotherData'

const handleChangeMessage = () => {
    if (mode.includes('data')) {
        mode = 'anotherData';
    } else {
        mode = 'data';
    }
    
    render(mode);
};

button.addEventListener('click', handleChangeMessage);
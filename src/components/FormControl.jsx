// import React from 'react';

// U.I / U.X / D.X (developer experience)

const FormControl = () => (
  <div className="formControl">
    <label>
      사용자 이름 <input type="text" name="username" />
    </label>
  </div>
);

// 리액트 + JSX 코드를 해석하면 다음과 같음 (에러 메시지 : React가 필요해!)
// const FormControl = () => (
//   React.createElement('div', { className: 'formControl'}, 
//     React.createElement('label', {},
//       '사용자 이름 ',
//       React.createElement('input', { type: 'text', name: 'username' }),
//     )
//   )
// )

export default FormControl;
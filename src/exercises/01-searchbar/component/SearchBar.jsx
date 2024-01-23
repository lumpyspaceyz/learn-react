import './SearchBar.css';

// 일반 함수
// - 일반 함수는 항상 JSX를 반환할 필요가 없다.
// - 항상 첫 번째 인수로 props를 전달 받지 않는다.

// 함수 컴포넌트 (in 리액트)
// - 항상 JSX를 반환한다.
// - 항상 첫 번째 인수로 props를 전달 받는다.

// 리액트 함수 컴포넌트 무조건 첫번째 인수로 props 객체를 전달 받는다.
function SearchBar(props) {
  console.log(props);

  return (
    <form className="searchBar" onSubmit={(e) => e.preventDefault()}>
      <div className="searchBarGroup" role="group">
        {/* {renderIconNaver()} */}
        {/* {renderFormControl()} */}
      </div>
      {/* {renderSearchButton()} */}
      {props.children}
    </form>
  );
}

export default SearchBar;
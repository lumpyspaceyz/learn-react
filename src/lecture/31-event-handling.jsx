let count = 100;
console.log(`count = ${count}`);

function Exercise() {

  const handleClick = (e) => {
    // console.log(e); // Event 객체(합성 이벤트)
    // console.log(e.nativeEvent); // Event 객체 (브라우저의 실제 이벤트)
    console.log(e.target);
    // console.log(e.currentTarget);
  }

  const handleCountUp = (e) => {
    e.stopPropagation();
    console.log(`count = ${++count}`);
  }

  const handleCountDown = (e) => {
    e.stopPropagation();
    console.log(`count = ${--count}`);
  }

  const actionOne = () => console.log('one');
  const actionTwo = () => console.log('two');
  const actionThree = () => console.log('three');

  const handleMultiEvents = (e) => {
    e.stopPropagation();
    actionOne()
    actionTwo()
    actionThree()
  }

  return <div
    style={styles.div}
    onClick={handleClick}
  >
    <strong
      style={styles.strong}
      onClick={handleClick}
    >
      Strong element
    </strong>
    <em
      style={styles.em}
      onClick={handleClick}
    >
      emphasize element
    </em>
    <button
      type="button"
      onClick={handleCountDown}
    >
      count down
    </button>
    <button
      type="button"
      onClick={handleCountUp}
    >
      count up
    </button>
    <button
      type="button"
      onClick={handleMultiEvents}
    >
      multi event handling
    </button>
  </div>
}

const styles = {
  div: {
    display: 'flex',
    gap: 20,
    padding: 20,
    border: '1px solid blue',
  },
  strong: {
    padding: 20,
    border: '1px solid red',
  },
  em: {
    padding: 20,
    border: '1px solid green',
  }
}

export default Exercise;
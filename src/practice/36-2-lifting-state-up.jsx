import { range } from '@/utils';
import { useState } from 'react';

function Son({ index, onActive, isActive, value }) {
  const handleClick = (e) => {
    e.preventDefault();
    onActive(index);
  }

  const textDecoration = isActive ? 'underline' : 'none';
  const color = isActive ? '#dd3c87' : 'inherit';

  return (
    <div>
      <h3>
        <a
          href=''
          onClick={handleClick}
          style={{
            color,
            textDecoration,
          }}
        >
          자식 {value}
        </a>
      </h3>
    </div>
  );
}

function Parent({ start = 10, end = 30, step = 10 }) {
  const [activeIndex, updateActiveIndex] = useState()
  const handleChangeActiveSon = (index) => {
    updateActiveIndex(index)
  }

  return (
    <div>
      <h2
        style={{
          fontSize: '1.5rem',
        }}
      >
        부모
      </h2>
      <ul>
        {range(start, end, step).map((n, index) => {
          const activeSon = activeIndex === index;

          return (
            <li key={n}>
              <Son
                index={index}
                value={n}
                isActive={activeSon}
                onActive={handleChangeActiveSon}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Exercise() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default Exercise;

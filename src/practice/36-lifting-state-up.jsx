import { useState } from 'react'
import { A11yHidden } from '../components';
import classes from './36-lifting-state-up.module.css'

// [학습 주제]
// 컴포넌트 사이에 상태를 공유해요!
// - 컴포넌트 상태(자신 안에서만 사용 가능)
// - 하위 컴포넌트에는 속성(props)로 상태를 전달할 수 있다.
// - 다른 형제 또는 저 멀리 있는 컴포넌트와 상태를 공유할 수 없다.
// - 컴포넌트 사이에 상태를 공유하려면?
//   공유하려는 컴포넌트 들의 가장 가까운 상위 컴포넌트로 상태를 끌어올려야 한다.

function AccordionPanel({
  onClick, // 버튼을 클릭했을 때 패널을 여는 이벤트 핸들러
  index, // 패널 식별 번호(정적)
  isOpen, // 이거 왜 초기화?
  children
}) {
  console.log('isOpen : ' + isOpen)
  return (
    <div className={classes.AccordionPanel}>
      <button onClick={() => { onClick(index) }} type="button">
        {isOpen ? '닫음' : '열림'}
      </button>
      <div hidden={!isOpen}>{children}</div>
    </div>
  )
}

function Accordion() {
  const style = { width: 250 }

  const [openedPanelIndex, setOpenedPanelIndex] = useState(0 /* 0 | 1 | 2 */)
  const handleOpenPanel = (panelIndex) => {
    console.log('func handleOpenPanel')
    console.log({ panelIndex })
    setOpenedPanelIndex(panelIndex)
  };

  return (
    <div className={classes.Accordion}>
      <A11yHidden as='h3'>아코디언을 사용해 컴포넌트 간 상태 공유</A11yHidden>
      <AccordionPanel
        onClick={handleOpenPanel}
        index={0}
        isOpen={openedPanelIndex === 0}
      >
        <p>바보장군</p>
        <img style={style} src="../../public/images/janggun01.jpeg" alt="" />
      </AccordionPanel>
      <AccordionPanel
        onClick={handleOpenPanel}
        index={1}
        isOpen={openedPanelIndex === 1}
      >
        <p>째릿장군</p>
        <img style={style} src="../../public/images/janggun02.jpeg" alt="" />
      </AccordionPanel>
      <AccordionPanel
        onClick={handleOpenPanel}
        index={2}
        isOpen={openedPanelIndex === 2}
      >
        <p>다시 바보장군</p>
        <img style={style} src="../../public/images/janggun01.jpeg" alt="" />
      </AccordionPanel>
    </div>
  )
}

export default function Exercise() {
  return (
    <div>
      <h2>상태 끌어올리기</h2>
      <Accordion></Accordion>
    </div>
  )
}
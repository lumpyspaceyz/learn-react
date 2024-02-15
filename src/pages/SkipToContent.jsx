import { useEffect } from 'react';
import { string } from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Navigate, useNavigate } from 'react-router-dom';
import { Section, SkipToContent } from '@/components';
import { getDocumentTitle, range } from '@/utils';

let tryDemo = false;

const colorVariants = {
  slate: {
    bg: {
      50: 'bg-slate-50',
      100: 'bg-slate-100',
      200: 'bg-slate-200',
      300: 'bg-slate-300',
      400: 'bg-slate-400',
      500: 'bg-slate-500',
      600: 'bg-slate-600',
      700: 'bg-slate-700',
      800: 'bg-slate-800',
      900: 'bg-slate-900',
      950: 'bg-slate-950',
    },
    text: {
      50: 'text-slate-50',
      100: 'text-slate-100',
      200: 'text-slate-200',
      300: 'text-slate-300',
      400: 'text-slate-400',
      500: 'text-slate-500',
      600: 'text-slate-600',
      700: 'text-slate-700',
      800: 'text-slate-800',
      900: 'text-slate-900',
      950: 'text-slate-950',
    },
  },
};

const ranges = range(100, 900, 100);

export function Component({ goTo }) {
  // React Router 6.4+ <Redirect /> 사용 못함

  // 프로그래밍 방식 1.
  // useNavigate 훅
  const navigate = useNavigate();

  useEffect(() => {
    let timerClearId = 0;

    if (tryDemo) {
      timerClearId = setTimeout(() => {
        navigate('/context-intro', { replace: true });
      }, 3000);
    }
    return () => {
      clearTimeout(timerClearId);
    };
  }, [navigate]);

  // 프로그래밍 방식 2.
  // <Navigate /> 컴포넌트
  if (goTo) {
    return <Navigate to={goTo} replace />;
  }

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('특정 위치로 바로가기')}</title>
        <meta
          name="description"
          content="어떤 사용자는 반복적인 내비게이션 영역을 건너 띄어 본문 영역 또는 특정 영역으로 바로 이동하는 기능이 필요합니다."
        />
      </Helmet>
      <h2 className="my-5">특정 위치로 바로가기</h2>
      <nav aria-label="특정 영역 이동 링크">
        {ranges.map((n) => (
          <SkipToContent
            key={n}
            className="!fixed top-2 right-4 p-1 bg-indigo-950 text-white text-xs"
            href={`#section-${n}`}
          >
            섹션 {n}으로 이동
          </SkipToContent>
        ))}
      </nav>
      <div className="flex flex-col space-y-0.5 border-2 border-white shadow-md">
        {ranges
          .map((n) => ({
            // bgColor: `bg-slate-${n}`,
            bgColor: colorVariants.slate.bg[n],
            // textColor: `text-slate-${n >= 500 ? 100 : 900}`,
            textColor: colorVariants.slate.text[n >= 500 ? 100 : 900],
            id: n,
          }))
          .map(({ id: n, bgColor, textColor }) => {
            return (
              <Section
                key={n}
                id={`section-${n}`}
                headline={`섹션 헤드라인 #${n}`}
                bgColor={bgColor}
                textColor={textColor}
              />
            );
          })}
      </div>
    </>
  );
}

Component.propTypes = {
  goTo: string,
};

Component.displayName = 'SkipToContentPage';

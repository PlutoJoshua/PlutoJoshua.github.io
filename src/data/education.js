// 학력/교육 이수 내역.
export const education = [
  {
    id: 'sogang-masters',
    school: '서강대학교',
    degree: '석사',
    field: 'AI융합 교육설계·경영 (교육공학-교육행정 융합)',
    period: { start: '2018.02', end: '2020.08' },
    note: '',
  },
];

// 교육/부트캠프 이수 (선택). education 과 동일한 카드로 렌더.
export const trainings = [
  {
    id: 'chunjae-bigdata-7',
    school: '천재IT교육센터',
    degree: '수료',
    field: '빅데이터 서비스 개발자 과정 7기',
    period: { start: '2024.01', end: '2024.07' },
    note: '기초 이론부터 실무 프로젝트까지 다루는 6개월 커리큘럼',
  },
];

// 자격증 (칩 형태로 나열). name 만 필수, note 는 선택(예: 필기).
export const licenses = [
  { name: 'SQLD' },
  { name: '정보처리기사', note: '필기' },
  { name: '빅데이터분석기사', note: '필기' },
  { name: '컴퓨터활용능력 1급' },
  { name: '직업상담사' },
  { name: '평생교육사' },
];

// 학력/교육 이수 내역.
// TODO: 실제 정보로 교체 — 아래는 구조 확인용 플레이스홀더.
export const education = [
  {
    id: 'university',
    school: '○○대학교 (예시)',
    degree: '학사',
    field: '전공 입력',
    period: { start: '2016', end: '2020' },
    note: '관련 활동·수상 (선택)',
  },
];

// 자격증/부트캠프 등 (선택). education 과 동일한 카드로 렌더.
export const certifications = [
  {
    id: 'ai-bootcamp',
    school: 'AI 부트캠프 (예시)',
    degree: '수료',
    field: 'AI / ML Engineering',
    period: { start: '2023', end: '2023' },
    note: '플레이스홀더',
  },
];

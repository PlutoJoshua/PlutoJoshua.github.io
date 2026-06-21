# Kim Soyoung · Portfolio

AI Engineer / Product Builder 포트폴리오 사이트.
핀테크 도메인의 LLM 에이전트와 자동화 프로젝트를 정리합니다.

🔗 **Live:** https://plutojoshua.github.io

## 기술 스택

React 19 · Vite · Tailwind CSS · React Router

## 구조

콘텐츠는 UI와 분리되어 `src/data/`에서 관리합니다.

| File | Content |
|------|---------|
| `src/data/profile.js`   | 프로필 · 소개 · Currently |
| `src/data/projects.js`  | 프로젝트 (featured / opensource / automation) |
| `src/data/career.js`    | 경력 타임라인 |
| `src/data/education.js` | 학력 · 자격증 |
| `src/data/skills.js`    | 스킬 카드 |

## 개발

```bash
npm install
npm run dev      # 로컬 개발 서버
npm run build    # docs/ 로 프로덕션 빌드
npm run deploy   # GitHub Pages 배포
```

## 배포

GitHub Pages가 `docs/` 폴더를 서빙합니다.
프로젝트 페이지로 배포하려면 `vite.config.js`의 `base`를 레포 경로로 변경하세요.

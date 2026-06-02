import SectionLabel from './SectionLabel';

// 내부 페이지 공통 타이틀 블록.
export default function PageHeader({ label, title, subtitle }) {
  return (
    <div className="mb-12 max-w-3xl">
      {label ? <SectionLabel>{label}</SectionLabel> : null}
      <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
      {subtitle ? <p className="mt-5 text-lg leading-8 text-muted dark:text-muted-d">{subtitle}</p> : null}
    </div>
  );
}

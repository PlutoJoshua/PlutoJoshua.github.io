import { Bot, BrainCircuit, Code2, Layers3 } from 'lucide-react';

// 데이터의 icon 문자열 key → lucide 컴포넌트 매핑.
const ICONS = { Bot, BrainCircuit, Code2, Layers3 };

export default function SkillCard({ skill }) {
  const Icon = ICONS[skill.icon] || Bot;
  return (
    <div className="rounded-[1.75rem] border border-ink/10 bg-ink p-6 text-white shadow-soft dark:border-line-d dark:bg-paper-d">
      <Icon className="h-7 w-7 text-cyan" />
      <h3 className="mt-5 text-xl font-black">{skill.title}</h3>
      <ul className="mt-5 space-y-2 text-sm text-white/70">
        {skill.items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

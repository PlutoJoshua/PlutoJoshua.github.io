import { career, careerGroups } from '../data/career';
import PageHeader from '../components/PageHeader';
import TimelineItem from '../components/TimelineItem';

// 그룹 내 최신순 정렬 (current > 시작일 내림차순).
function sortByRecent(a, b) {
  if (a.current && !b.current) return -1;
  if (!a.current && b.current) return 1;
  return b.period.start.localeCompare(a.period.start);
}

export default function Career() {
  return (
    <section className="relative mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-16">
      <PageHeader
        label="Career"
        title="경력"
        subtitle="AI 엔지니어링과 운영·데이터 경험을 연결해 동작하는 제품으로 증명해 왔습니다."
      />

      <div className="space-y-14">
        {careerGroups.map((group) => {
          const items = career.filter((c) => c.group === group.key).sort(sortByRecent);
          if (!items.length) return null;
          return (
            <div key={group.key}>
              <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-muted dark:text-muted-d">
                {group.label}
              </h2>
              <ol>
                {items.map((item) => (
                  <TimelineItem key={item.id} item={item} />
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </section>
  );
}

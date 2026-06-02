import { career } from '../data/career';
import PageHeader from '../components/PageHeader';
import TimelineItem from '../components/TimelineItem';

// 최신순 정렬 (Present > 날짜 내림차순).
function sortByRecent(a, b) {
  if (a.current && !b.current) return -1;
  if (!a.current && b.current) return 1;
  return b.period.start.localeCompare(a.period.start);
}

export default function Career() {
  const items = [...career].sort(sortByRecent);
  return (
    <section className="relative mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-16">
      <PageHeader
        label="Career"
        title="경력"
        subtitle="AI 엔지니어링과 운영·데이터 경험을 연결해 동작하는 제품으로 증명해 왔습니다."
      />
      <ol className="mt-4">
        {items.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </ol>
    </section>
  );
}

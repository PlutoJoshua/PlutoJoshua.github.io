import { education, certifications } from '../data/education';
import PageHeader from '../components/PageHeader';
import EducationCard from '../components/EducationCard';
import SectionLabel from '../components/SectionLabel';

export default function Education() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-16">
      <PageHeader label="Education" title="학력" subtitle="기반이 된 학습과 이수 내역입니다." />

      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </div>

      {certifications?.length ? (
        <div className="mt-16">
          <SectionLabel>Certifications</SectionLabel>
          <div className="grid gap-5 md:grid-cols-2">
            {certifications.map((item) => (
              <EducationCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

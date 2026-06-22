import { Award } from 'lucide-react';
import { education, trainings, licenseGroups } from '../data/education';
import PageHeader from '../components/PageHeader';
import EducationCard from '../components/EducationCard';
import SectionLabel from '../components/SectionLabel';

export default function Education() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-16">
      <PageHeader label="Education" title="학력" subtitle="기반이 된 학습과 이수 내역입니다." />

      <div className="grid gap-5">
        {education.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </div>

      {trainings?.length ? (
        <div className="mt-16">
          <SectionLabel>Bootcamp</SectionLabel>
          <div className="grid gap-5 md:grid-cols-2">
            {trainings.map((item) => (
              <EducationCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      ) : null}

      {licenseGroups?.length ? (
        <div className="mt-16">
          <SectionLabel>Licenses & Certifications</SectionLabel>
          <div className="space-y-6">
            {licenseGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-3 text-sm font-semibold text-muted dark:text-muted-d">{group.label}</p>
                <ul className="flex flex-wrap gap-3">
                  {group.items.map((lic) => (
                    <li
                      key={lic.name}
                      className="inline-flex items-center gap-2 rounded-2xl border border-ink/10 bg-white/70 px-4 py-3 text-sm font-semibold shadow-sm backdrop-blur dark:border-line-d dark:bg-paper-d/70"
                    >
                      <Award className="h-4 w-4 text-accent" />
                      {lic.name}
                      {lic.note ? (
                        <span className="font-normal text-muted dark:text-muted-d">· {lic.note}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

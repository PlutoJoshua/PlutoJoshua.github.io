import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe2, Mail, Rocket, Sparkles } from 'lucide-react';
import { profile, currently, metrics, about, buildingNext, links } from '../data/profile';
import { skills } from '../data/skills';
import SectionLabel from '../components/SectionLabel';
import Pill from '../components/Pill';
import SkillCard from '../components/SkillCard';
import GitHubMark from '../components/GitHubMark';
import profilePhoto from '../assets/profile.jpg';

const LINK_ICONS = { github: GitHubMark, Globe2, Mail };

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-16">
        <div>
          <div className="mb-8 flex items-center gap-4">
            <img
              src={profilePhoto}
              alt={`${profile.name} 프로필 사진`}
              width="72"
              height="72"
              loading="eager"
              className="h-[72px] w-[72px] shrink-0 rounded-full object-cover object-top shadow-soft ring-2 ring-white dark:ring-paper-d"
            />
            <div>
              <p className="text-lg font-bold tracking-tight">{profile.name}</p>
              <p className="text-sm text-muted dark:text-muted-d">{profile.role}</p>
            </div>
          </div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm text-muted shadow-sm backdrop-blur dark:border-line-d dark:bg-paper-d/70 dark:text-muted-d">
            <Sparkles className="h-4 w-4 text-accent" />
            {profile.badge}
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.headline}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted dark:text-muted-d sm:text-xl">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {profile.heroTags.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {links.map(({ label, href, icon, muted }) => {
              const Icon = LINK_ICONS[icon] || Globe2;
              return (
                <a
                  key={label}
                  href={href}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    muted
                      ? 'border border-ink/10 text-muted hover:text-ink dark:border-line-d dark:text-muted-d dark:hover:text-paper'
                      : 'bg-ink text-white hover:-translate-y-0.5 hover:bg-accent dark:bg-paper dark:text-ink dark:hover:bg-accent dark:hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" /> {label}
                </a>
              );
            })}
          </div>
        </div>

        <aside className="rounded-[2rem] border border-ink/10 bg-white/70 p-6 shadow-soft backdrop-blur dark:border-line-d dark:bg-paper-d/70">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted dark:text-muted-d">
            {currently.label}
          </p>
          <h2 className="mt-4 text-3xl font-black">{currently.title}</h2>
          <p className="mt-4 leading-7 text-muted dark:text-muted-d">{currently.description}</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {metrics.map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-line bg-paper/70 p-5 dark:border-line-d dark:bg-ink-d/70">
                <div className="text-3xl font-black text-accent">{value}</div>
                <div className="mt-2 text-sm leading-5 text-muted dark:text-muted-d">{label}</div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      {/* About */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionLabel>About</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">{about.heading}</h2>
          <div className="space-y-5 text-lg leading-8 text-muted dark:text-muted-d">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Skills preview */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionLabel>Skills</SectionLabel>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      </section>

      {/* Projects CTA */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Featured Projects</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">AI가 실제로 일하게 만드는 프로젝트들.</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-accent dark:text-paper">
            모든 프로젝트 보기 <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Building next */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-ink/10 bg-white/80 p-8 shadow-soft backdrop-blur dark:border-line-d dark:bg-paper-d/80 lg:p-12">
          <SectionLabel>What I’m Building Next</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">{buildingNext.heading}</h2>
            <div className="space-y-5 text-lg leading-8 text-muted dark:text-muted-d">
              {buildingNext.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <a
                href={buildingNext.cta.href}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white hover:bg-ink dark:hover:bg-paper dark:hover:text-ink"
              >
                {buildingNext.cta.label} <Rocket className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

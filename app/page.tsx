import type { Metadata } from "next";
import { leadStories, quickSignals, site } from "./content";

export const metadata: Metadata = {
  title: `${site.name}｜个人 AI 观察笔记`,
  description: site.intro,
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${site.name}首页`}>
          <span className="brand-mark" aria-hidden="true">偏</span>
          <span>
            <strong>{site.name}</strong>
            <small>{site.label}</small>
          </span>
        </a>
        <nav aria-label="主导航">
          <a href="#signals">本期信号</a>
          <a href="#archive">短讯</a>
          <a href="#about">关于</a>
        </nav>
        <a className="github-link" href="https://github.com/xiaominl290-eng/ai-field-notes" target="_blank" rel="noreferrer">
          GitHub <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <aside className="issue-rail" aria-label="本期信息">
          <span>{site.issue}</span>
          <span>{site.date}</span>
          <span>READ {site.readingTime}</span>
        </aside>
        <div className="hero-copy">
          <p className="kicker">个人 AI 观察 / 每周更新</p>
          <h1>{site.title}</h1>
          <p className="intro">{site.intro}</p>
        </div>
        <div className="hero-note" aria-label="编辑说明">
          <span className="note-pin">NOTE</span>
          <p>少一点“发生了什么”，多一点“它为什么值得在意”。</p>
          <div className="scan-line" aria-hidden="true"><span /></div>
          <small>本期扫描 28 条来源，留下 6 个信号</small>
        </div>
      </section>

      <section className="stories" id="signals" aria-labelledby="signals-title">
        <div className="section-heading">
          <p>DEEP READ</p>
          <h2 id="signals-title">三个值得展开的信号</h2>
        </div>

        {leadStories.map((story) => (
          <article className="story" key={story.id}>
            <div className="story-index" aria-hidden="true">{story.id}</div>
            <div className="story-body">
              <p className="eyebrow">{story.eyebrow}</p>
              <h3>{story.title}</h3>
              <p className="summary">{story.summary}</p>
              <div className="judgement-grid">
                <div>
                  <span>我的判断</span>
                  <p>{story.signal}</p>
                </div>
                <div>
                  <span>仍待确认</span>
                  <p>{story.uncertainty}</p>
                </div>
              </div>
              <footer className="story-footer">
                <ul aria-label="标签">
                  {story.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <a href={story.source.url} target="_blank" rel="noreferrer">
                  <span>{story.source.publisher}</span>
                  {story.source.label} <Arrow />
                </a>
              </footer>
            </div>
          </article>
        ))}
      </section>

      <section className="quick" id="archive" aria-labelledby="quick-title">
        <div className="section-heading">
          <p>QUICK SIGNALS</p>
          <h2 id="quick-title">再记三笔</h2>
        </div>
        <div className="quick-list">
          {quickSignals.map((item) => (
            <article key={item.id}>
              <span>{item.id}</span>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <p className="kicker">ABOUT THIS NOTE</p>
        <h2>这是一个公开的个人判断记录。</h2>
        <p>
          所有摘要都链接回原始来源；“我的判断”明确区别于事实信息。
          你可以直接修改 <code>app/content.ts</code>，把它变成自己的行业观察、产品周报或学习笔记。
        </p>
        <a href="#top">回到顶部 ↑</a>
      </section>

      <footer className="site-footer">
        <span>© 2026 {site.name}</span>
        <span>记录信号，不追逐噪音。</span>
      </footer>
    </main>
  );
}

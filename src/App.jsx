import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import I18nText from './components/I18nText.jsx'

const NAV = [
  ['01', 'ownership', 'nav.1', 'Full handover'], ['02', 'services', 'nav.2', 'Services'],
  ['06', 'contact', 'nav.9', 'Contact'],
]

const SERVICES = [
  ['Custom software development', 'Tailored web, mobile, desktop and cloud applications built around the way your business works.', 'Fits how you work', 'fit'],
  ['Web application development', 'Dashboards, client portals, booking systems and SaaS platforms.', 'Launch sooner', 'launch'],
  ['Mobile app development', 'Native iOS and Android, or cross-platform from one codebase.', 'Reach customers', 'reach'],
  ['UI/UX design', 'From discovery and wireframes to polished, easy-to-use interfaces.', 'Convert more', 'convert'],
  ['AI integration & automation', 'AI features, chatbots and workflow automation that remove repetitive work.', 'Save time', 'time'],
  ['API & third-party integrations', 'Connect accounting, CRM, ERP and payment gateways so data flows on its own.', 'Fewer errors', 'errors'],
  ['Legacy modernisation', 'Migrate, replatform and refactor outdated systems onto maintainable stacks.', 'Reduce risk', 'risk'],
  ['Cloud & DevOps', 'Reliable hosting, CI/CD pipelines and infrastructure as code.', 'Stay online', 'online'],
  ['Maintenance & support', 'Security patches, upgrades and ongoing feature work.', 'Stop worrying', 'worry'],
  ['Consultancy / fractional CTO', 'Technical strategy, architecture reviews and due diligence.', 'Decide well', 'decide'],
]

function SectionHeading({ number, k, children }) {
  return <div className="sh"><span className="n">{number}</span><I18nText as="h2" i18nKey={k}>{children}</I18nText></div>
}

function App() {
  const { i18n } = useTranslation()
  const language = i18n.resolvedLanguage === 'zh-Hant' ? 'zh-Hant' : 'en'
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'zh-Hant'
      ? 'Hanamaru 花丸 · Build it. Own it. 香港軟件工作室'
      : 'Hanamaru. Build it. Own it. Software studio, Hong Kong'
    try { window.localStorage.setItem('hanamaru-editorial-lang', language) } catch { /* Storage is optional. */ }
  }, [language])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id))
    }, { rootMargin: '-45% 0px -50% 0px' })
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setMenuOpen(false)
    const closeOnResize = () => window.innerWidth > 1180 && setMenuOpen(false)
    document.addEventListener('keydown', closeOnEscape)
    window.addEventListener('resize', closeOnResize)
    return () => { document.removeEventListener('keydown', closeOnEscape); window.removeEventListener('resize', closeOnResize) }
  }, [])

  const changeLanguage = (nextLanguage) => i18n.changeLanguage(nextLanguage)
  return <>
    <I18nText as="a" className="skip" href="#main" i18nKey="skip">Skip to content</I18nText>
    <header className="hdr"><div className="grid">
      <a className="wm" href="#top" aria-label="Hanamaru, back to top">Hanamaru<span>.</span></a>
      <nav id="nav" className={menuOpen ? 'open' : ''} aria-label="Main">
        {NAV.map(([number, id, key, label]) => <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''} onClick={() => setMenuOpen(false)}><b>{number}</b><I18nText i18nKey={key}>{label}</I18nText></a>)}
      </nav>
      <div className="tools"><div className="lang" role="group" aria-label="Language">
        <button type="button" aria-pressed={language === 'en'} onClick={() => changeLanguage('en')}>EN</button><button type="button" aria-pressed={language === 'zh-Hant'} lang="zh-Hant" onClick={() => changeLanguage('zh-Hant')}>繁中</button>
      </div><button className="menu" type="button" aria-expanded={menuOpen} aria-controls="nav" onClick={() => setMenuOpen((open) => !open)}><I18nText i18nKey="menu">Menu</I18nText></button></div>
    </div></header>

    <main id="main">
      <section className="hero" id="top"><div className="lines" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <i key={index} />)}</div><div className="grid">
        <div className="hero-meta"><I18nText className="label" i18nKey="hero.meta">Software studio · Cheung Sha Wan, Hong Kong</I18nText><I18nText className="label" i18nKey="hero.est">Est. 2020</I18nText></div>
        <h1 className="giant" lang="en">Build it.<br />Own <span className="o">it.</span></h1>
        <I18nText as="p" className="hero-sub" i18nKey="hero.sub">Custom software, web and mobile apps, and AI automation, made carefully and handed over completely.</I18nText>
      </div></section>

      <section className="sec" id="ownership"><div className="grid"><SectionHeading number="01" k="s1.h">Full handover</SectionHeading>
        <I18nText as="p" className="big" i18nKey="s1.big">Most agencies rent you software. <em>We hand you the keys.</em></I18nText>
        <div className="tenets">{[
          ['i.', 'Your code', 'Every line lives in a repository you control, not ours.'], ['ii.', 'Your cloud', "Hosting and services run on accounts in your company's name."],
          ['iii.', 'Your docs', 'Plain-language documentation so any competent team can take over.'], ['iv.', 'Your call', 'Stay with us for support, or walk away with everything. No lock-in.'],
        ].map(([roman, title, body], index) => <div key={title}><b>{roman}</b><I18nText as="h3" i18nKey={`t${index + 1}.h`}>{title}</I18nText><I18nText as="p" i18nKey={`t${index + 1}.p`}>{body}</I18nText></div>)}</div>
      </div></section>

      <section className="sec" id="services"><div className="grid"><SectionHeading number="02" k="s2.h">Services</SectionHeading><I18nText as="p" className="big" i18nKey="s2.big">Ten things we do, <em>and what each one gets you.</em></I18nText>
        <div className="idx" role="table" aria-label="Services"><div className="row head" role="row"><I18nText role="columnheader" i18nKey="ix.no">No.</I18nText><I18nText role="columnheader" i18nKey="ix.svc">Service</I18nText><I18nText role="columnheader" i18nKey="ix.what">What it involves</I18nText><I18nText role="columnheader" className="c" i18nKey="ix.out">Outcome</I18nText></div>
          {SERVICES.map(([name, description, outcome, outcomeKey], index) => { const number = String(index + 1).padStart(2, '0'); return <div className="row" role="row" id={`svc-${number}`} key={name}><span className="i" role="cell">{number}</span><I18nText as="h3" role="cell" i18nKey={`v${index + 1}.h`}>{name}</I18nText><I18nText as="p" role="cell" i18nKey={`v${index + 1}.p`}>{description}</I18nText><span className="c" role="cell"><i>→</i> <I18nText i18nKey={`o.${outcomeKey}`}>{outcome}</I18nText></span></div> })}
        </div>
      </div></section>

      <Process />

      <section className="sec" id="open-source"><div className="grid"><SectionHeading number="04" k="s7.h">Open source</SectionHeading><div className="os"><I18nText as="p" i18nKey="s7.p">We have some experimental projects on GitHub. Feel free to use and comment.</I18nText><a className="gh" href="https://github.com/hanamaru-hk" target="_blank" rel="noopener">github.com/hanamaru-hk ↗</a></div></div></section>
      <Faq />
      <Contact />
    </main>
    <footer><div className="grid"><span className="l">© 2026 <span className="nw">Hanamaru Company Limited</span> · <span className="nw">花丸有限公司</span></span><span className="m" lang="en">Build it. Own it.</span></div></footer>
  </>
}

function Process() {
  const steps = [['Talk', 'Tell us what you need by email, on WhatsApp, or at our Cheung Sha Wan studio (by appointment).'], ['Scope', 'We understand what you need and agree the scope before work starts.'], ['Build', "Regular demos you can click through, in a repository that's yours from day one."], ['Hand over', 'Code, documentation and accounts, transferred. Stay with us for ongoing support or take it from there.']]
  return <section className="sec" id="process"><div className="grid"><SectionHeading number="03" k="s6.h">Process</SectionHeading><I18nText as="p" className="big" i18nKey="s6.big">Four steps. No surprises.</I18nText><ol className="tenets steps">{steps.map(([title, body], index) => <li key={title}><b>{String(index + 1).padStart(2, '0')}</b><I18nText as="h3" i18nKey={`p${index + 1}.h`}>{title}</I18nText><I18nText as="p" i18nKey={`p${index + 1}.p`}>{body}</I18nText></li>)}</ol></div></section>
}

function Faq() {
  const faqs = [
    ['Who owns the code?', "You do. The repository, documentation and cloud accounts are set up in your company's name, so you can keep working with us or hand everything to another team."],
    ['How much does a project cost?', 'It depends on the scope. Contact us to discuss your needs and receive an estimate.'],
    ['Can you take over an app someone else built?', 'Yes. We start with a review of the code and infrastructure, then suggest whether to fix, modernise or rebuild.'],
    ['What happens after launch?', "That's up to you. Stay with us for patches, upgrades and new features, or take the code and run it yourselves."],
    ['Do you work in Chinese?', "Yes. We're based in Hong Kong and work in English and Chinese."],
    ['Can I just message you on WhatsApp?', 'Of course: +852 5360 5900. Or email info@hanamaru-solutions.hk.'],
  ]
  return <section className="sec" id="faq"><div className="grid"><SectionHeading number="05" k="s8.h">Questions</SectionHeading><div className="faq">{faqs.map(([question, answer], index) => <details open={index === 0} key={question}><summary><b>{String(index + 1).padStart(2, '0')}</b><I18nText i18nKey={`f${index + 1}.q`}>{question}</I18nText></summary><div className="a"><I18nText as="p" i18nKey={`f${index + 1}.a`}>{answer}</I18nText></div></details>)}</div></div></section>
}

function Contact() {
  return <section className="sec contact" id="contact"><div className="grid"><SectionHeading number="06" k="s9.h">Contact</SectionHeading><a className="mail" href="mailto:info@hanamaru-solutions.hk">info@hanamaru-<br />solutions.hk</a><div className="cgrid"><div><p className="label">WhatsApp</p><a href="https://wa.me/85253605900" target="_blank" rel="noopener">+852 5360 5900</a></div><div><I18nText as="p" className="label" i18nKey="ct.studio">Studio</I18nText><I18nText as="p" i18nKey="ct.addr">Por Mee Factory Building,<br />Cheung Sha Wan, Kowloon</I18nText><I18nText as="a" className="map" href="https://maps.app.goo.gl/TSFMhZpKgmmz31YXA" target="_blank" rel="noopener" i18nKey="ct.map">Map ↗</I18nText></div><div><I18nText as="p" className="label" i18nKey="ct.code">Code</I18nText><a href="https://github.com/hanamaru-hk" target="_blank" rel="noopener">github.com/hanamaru-hk</a></div></div>
  </div></section>
}

export default App

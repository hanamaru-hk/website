import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import I18nText from './components/I18nText.jsx'

const NAV = [
  ['01', 'ownership', 'nav.1', 'Ownership'], ['02', 'services', 'nav.2', 'Services'],
  ['03', 'work', 'nav.3', 'Work'], ['04', 'start', 'nav.4', 'Start here'],
  ['05', 'pricing', 'nav.5', 'Pricing'], ['09', 'contact', 'nav.9', 'Contact'],
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
  ['Maintenance & support', 'SLA-backed packages: security patches, upgrades and ongoing features.', 'Stop worrying', 'worry'],
  ['Consultancy / fractional CTO', 'Technical strategy, architecture reviews and due diligence.', 'Decide well', 'decide'],
]

const NEEDS = [
  ['A', 'new', 'A new product or system', 'An idea, a portal, a booking system, an app'],
  ['B', 'auto', 'Less manual work', 'Automate tasks, connect tools, add AI'],
  ['C', 'old', 'Fix or modernise an old system', 'Slow, fragile or hard to change'],
  ['D', 'care', 'Keep something running', 'Patches, upgrades, hosting, new features'],
  ['E', 'cto', 'Senior technical advice', 'Strategy, architecture, due diligence'],
]

const SERVICE_MAP = { new: [1, 2, 3, 4], auto: [5, 6], old: [7, 8, 9], care: [9, 8], cto: [10] }
const RECOMMENDATIONS = {
  en: {
    models: { fixed: 'Fixed-scope build', fixedCare: 'Fixed-scope build, then an SLA care plan', care: 'SLA care plan', cto: 'Fractional CTO' },
    new: ['fixed', 'Build something new, and own it', 'We scope it together, fix the price, design and build it, then hand over the code, docs and accounts.'],
    auto: ['fixed', 'Take the manual work out', 'Automate the repetitive tasks and connect the tools you already use, so data moves on its own.'],
    old: ['fixedCare', 'Modernise what you have', 'We review the existing system, then migrate or refactor it onto something your team can maintain.'],
    care: ['care', 'Keep it secure and improving', 'SLA-backed patches, upgrades and new features for a system that already runs your business.'],
    cto: ['cto', 'Senior advice, when you need it', 'Strategy, architecture reviews and due diligence from an experienced technical lead, without a full-time hire.'],
  },
  'zh-Hant': {
    models: { fixed: '固定範圍項目', fixedCare: '固定範圍項目，之後轉 SLA 維護計劃', care: 'SLA 維護計劃', cto: '兼任技術總監' },
    new: ['fixed', '由零開始，全權擁有', '我們一起定好範圍和價錢，然後設計、開發，最後把程式碼、文件和帳戶全部交給你。'],
    auto: ['fixed', '減少人手工作', '把重複的工作自動化，並連接你現有的工具，讓資料自動流轉。'],
    old: ['fixedCare', '把現有系統現代化', '我們先檢視現有系統，再把它遷移或重構成你的團隊能夠維護的樣子。'],
    care: ['care', '保持安全，持續改進', '為已經支撐著你業務的系統，提供有 SLA 保障的安全更新、升級及新功能。'],
    cto: ['cto', '需要時，就有資深意見', '由經驗豐富的技術主管提供技術策略、架構審查及盡職審查，毋須全職聘請。'],
  },
}

function SectionHeading({ number, k, children }) {
  return <div className="sh"><span className="n">{number}</span><I18nText as="h2" i18nKey={k}>{children}</I18nText></div>
}

function App() {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage === 'zh-Hant' ? 'zh-Hant' : 'en'
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const [need, setNeed] = useState('auto')
  const [formNeed, setFormNeed] = useState('')
  const [message, setMessage] = useState('')
  const [prefilled, setPrefilled] = useState(false)
  const [formError, setFormError] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef(null)
  const thanksRef = useRef(null)

  const tr = (key, fallback) => t(key, { defaultValue: fallback })
  const recommendation = useMemo(() => {
    const content = RECOMMENDATIONS[language]
    const [modelKey, title, description] = content[need]
    return {
      model: content.models[modelKey], title, description,
      services: SERVICE_MAP[need].map((number) => ({ number, name: tr(`v${number}.h`, SERVICES[number - 1][0]) })),
    }
  }, [language, need, t])

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

  useEffect(() => {
    if (!prefilled) return
    const separator = language === 'zh-Hant' ? '、' : ', '
    const text = language === 'zh-Hant'
      ? `你好，我想了解：${recommendation.title}。\n相關服務：${recommendation.services.map((s) => s.name).join(separator)}。\n合作方式：${recommendation.model}。\n\n項目簡介：`
      : `Hi Hanamaru, I'm interested in: ${recommendation.title}.\nRelevant services: ${recommendation.services.map((s) => s.name).join(separator)}.\nWay of working: ${recommendation.model}.\n\nAbout the project: `
    setMessage(text)
  }, [language, need, prefilled, recommendation])

  const changeLanguage = (nextLanguage) => i18n.changeLanguage(nextLanguage)
  const useRecommendation = () => { setFormNeed(need); setPrefilled(true) }
  const choosePricingNeed = (nextNeed) => setFormNeed(nextNeed)
  const submitForm = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const valid = data.get('name')?.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.get('email')?.trim())
    setFormError(!valid)
    if (!valid) return
    setSubmitted(true)
    requestAnimationFrame(() => { thanksRef.current?.focus({ preventScroll: true }); thanksRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' }) })
  }
  const resetForm = () => {
    formRef.current?.reset(); setFormNeed(''); setMessage(''); setPrefilled(false); setSubmitted(false); setFormError(false)
    requestAnimationFrame(() => formRef.current?.elements.name?.focus())
  }

  return <>
    <I18nText as="a" className="skip" href="#main" i18nKey="skip">Skip to content</I18nText>
    <header className="hdr"><div className="grid">
      <a className="wm" href="#top" aria-label="Hanamaru, back to top">Hanamaru<span>.</span></a>
      <nav id="nav" className={menuOpen ? 'open' : ''} aria-label="Main">
        {NAV.map(([number, id, key, label]) => <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''} onClick={() => setMenuOpen(false)}><b>{number}</b><I18nText i18nKey={key}>{label}</I18nText></a>)}
      </nav>
      <div className="tools"><div className="lang" role="group" aria-label="Language">
        <button type="button" aria-pressed={language === 'en'} onClick={() => changeLanguage('en')}>EN</button><button type="button" aria-pressed={language === 'zh-Hant'} lang="zh-Hant" onClick={() => changeLanguage('zh-Hant')}>繁中</button>
      </div><I18nText as="a" className="hcta" href="#contact" i18nKey="cta.start">Start a project</I18nText>
      <button className="menu" type="button" aria-expanded={menuOpen} aria-controls="nav" onClick={() => setMenuOpen((open) => !open)}><I18nText i18nKey="menu">Menu</I18nText></button></div>
    </div></header>

    <main id="main">
      <section className="hero" id="top"><div className="lines" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <i key={index} />)}</div><div className="grid">
        <div className="hero-meta"><I18nText className="label" i18nKey="hero.meta">Software studio · Cheung Sha Wan, Hong Kong</I18nText><span className="label"><I18nText i18nKey="hero.est">Est. [year]</I18nText> <span className="ph">Placeholder</span></span></div>
        <h1 className="giant" lang="en">Build it.<br />Own <span className="o">it.</span></h1>
        <I18nText as="p" className="hero-sub" i18nKey="hero.sub">Custom software, web and mobile apps, and AI automation, made carefully and handed over completely.</I18nText>
        <I18nText as="p" className="hero-sub2" i18nKey="hero.sub2">We write software the way a good carpenter builds furniture: to last, and to belong to you. The code, the repository, the documentation and the cloud accounts are yours from day one.</I18nText>
        <div className="hero-act"><I18nText as="a" className="btn p" href="#contact" i18nKey="cta.start">Start a project</I18nText><I18nText as="a" className="btn" href="#start" i18nKey="cta.need">What do you need?</I18nText></div>
      </div></section>

      <section className="sec" id="ownership"><div className="grid"><SectionHeading number="01" k="s1.h">Ownership</SectionHeading>
        <I18nText as="p" className="big" i18nKey="s1.big">Most agencies rent you software. <em>We hand you the keys.</em></I18nText>
        <div className="tenets">{[
          ['i.', 'Your code', 'Every line lives in a repository you control, not ours.'], ['ii.', 'Your cloud', "Hosting and services run on accounts in your company's name."],
          ['iii.', 'Your docs', 'Plain-language documentation so any competent team can take over.'], ['iv.', 'Your call', 'Stay with us for support, or walk away with everything. No lock-in.'],
        ].map(([roman, title, body], index) => <div key={title}><b>{roman}</b><I18nText as="h3" i18nKey={`t${index + 1}.h`}>{title}</I18nText><I18nText as="p" i18nKey={`t${index + 1}.p`}>{body}</I18nText></div>)}</div>
        <p className="note"><span className="ph">To confirm</span> <I18nText i18nKey="s1.note">Proposed positioning. Check these four commitments match how Hanamaru works before publishing.</I18nText></p>
      </div></section>

      <section className="sec" id="services"><div className="grid"><SectionHeading number="02" k="s2.h">Services</SectionHeading><I18nText as="p" className="big" i18nKey="s2.big">Ten things we do, <em>and what each one gets you.</em></I18nText>
        <div className="idx" role="table" aria-label="Services"><div className="row head" role="row"><I18nText role="columnheader" i18nKey="ix.no">No.</I18nText><I18nText role="columnheader" i18nKey="ix.svc">Service</I18nText><I18nText role="columnheader" i18nKey="ix.what">What it involves</I18nText><I18nText role="columnheader" className="c" i18nKey="ix.out">Outcome</I18nText></div>
          {SERVICES.map(([name, description, outcome, outcomeKey], index) => { const number = String(index + 1).padStart(2, '0'); return <div className="row" role="row" id={`svc-${number}`} key={name}><span className="i" role="cell">{number}</span><I18nText as="h3" role="cell" i18nKey={`v${index + 1}.h`}>{name}</I18nText><I18nText as="p" role="cell" i18nKey={`v${index + 1}.p`}>{description}</I18nText><span className="c" role="cell"><i>→</i> <I18nText i18nKey={`o.${outcomeKey}`}>{outcome}</I18nText></span></div> })}
        </div>
      </div></section>

      <section className="sec" id="work"><div className="grid"><SectionHeading number="03" k="s3.h">Selected work</SectionHeading><I18nText as="p" className="big" i18nKey="s3.big">Quiet software that does its job, year after year.</I18nText>
        <dl className="stats">{[['[X]', 'projects delivered'], ['[X]', 'years building software in Hong Kong'], ['[X]%', 'of clients who stay on a care plan']].map(([value, label], index) => <div key={label}><dt>{value}</dt><dd><I18nText i18nKey={`st.${index + 1}`}>{label}</I18nText> <span className="ph">Placeholder stat</span></dd></div>)}</dl>
        <div className="work">{[
          ['w8', 'c1', 'Web app · Integrations', '[−X%]', '[One line on the problem and what was built.]', '[result, e.g. order-processing time]'],
          ['w4', 'c2', 'Mobile app', '[X]', '[One line on the outcome.]', '[result, e.g. monthly active users]'],
        ].map(([width, key, meta, result, description, resultLabel]) => <article className={`case ${width}`} key={key}><div className="meta"><I18nText className="label" i18nKey={`${key}.m`}>{meta}</I18nText><span className="ph">Placeholder case study</span></div><div className="img"><I18nText className="label" i18nKey="c.img">Project image</I18nText></div><I18nText as="h3" i18nKey={`${key}.h`}>[Client name]: [project title]</I18nText><I18nText as="p" i18nKey={`${key}.p`}>{description}</I18nText><p className="res"><b>{result}</b> <I18nText i18nKey={`${key}.r`}>{resultLabel}</I18nText> · <I18nText i18nKey="c.year">[Year]</I18nText></p></article>)}</div>
        <div className="more"><p className="label more-h"><I18nText i18nKey="more.h">More work</I18nText> <span className="ph">Placeholder</span></p><ul>{[['[Legacy system migration]', 7], ['[Accounting and CRM integration]', 6], ['[Customer-service chatbot]', 5]].map(([label, service], index) => <li key={label}><I18nText i18nKey="more.client">[Client name]</I18nText><I18nText i18nKey={`more.${index + 1}`}>{label}</I18nText><I18nText className="label" i18nKey={`v${service}.h`}>{SERVICES[service - 1][0]}</I18nText><I18nText className="yr" i18nKey="c.year">[Year]</I18nText></li>)}</ul></div>
      </div></section>

      <section className="sec quote-sec"><div className="grid"><SectionHeading number="—" k="q.h">In their words</SectionHeading><I18nText as="blockquote" className="quote" i18nKey="q.text">“[A client quote about owning their system outright and what that changed for them.]”</I18nText><div className="cite"><I18nText i18nKey="q.who">[Client name], [Role, Company]</I18nText><span className="ph">Placeholder quote</span></div></div></section>

      <section className="sec" id="start"><div className="grid"><SectionHeading number="04" k="s4.h">Start here</SectionHeading><div className="big-wrap"><I18nText as="p" className="big" i18nKey="s4.big">What do you need?</I18nText><I18nText as="p" className="lede" i18nKey="s4.lede">Choose the closest match. We'll suggest the services and the way of working that fit, then fill in the enquiry form for you.</I18nText></div>
        <div className="chooser"><div className="opts" role="group" aria-label={tr('s4.big', 'What do you need?')}>{NEEDS.map(([letter, key, title, subtitle]) => <button type="button" className="opt" aria-pressed={need === key} onClick={() => setNeed(key)} key={key}><b>{letter}</b><span><I18nText as="strong" i18nKey={`op.${key}`}>{title}</I18nText><I18nText as="small" i18nKey={`op.${key}.s`}>{subtitle}</I18nText></span></button>)}</div>
          <div className="rec" aria-live="polite"><p className="label"><I18nText i18nKey="rec.label">Recommended way of working</I18nText>: <span className="acc">{recommendation.model}</span></p><h3>{recommendation.title}</h3><p>{recommendation.description}</p><ol>{recommendation.services.map(({ number, name }) => <li key={number}><i>{String(number).padStart(2, '0')}</i><a href={`#svc-${String(number).padStart(2, '0')}`}>{name}</a></li>)}</ol><I18nText as="a" className="btn k" href="#contact" i18nKey="rec.cta" onClick={useRecommendation}>Use this in the enquiry form →</I18nText></div>
        </div>
      </div></section>

      <Pricing onChoose={choosePricingNeed} />
      <Process />

      <section className="sec" id="open-source"><div className="grid"><SectionHeading number="07" k="s7.h">Open source</SectionHeading><div className="os"><I18nText as="p" i18nKey="s7.p">We have some experimental projects on GitHub. Feel free to use and comment.</I18nText><a className="gh" href="https://github.com/hanamaru-hk" target="_blank" rel="noopener">github.com/hanamaru-hk ↗</a></div></div></section>
      <Faq />
      <Contact formRef={formRef} thanksRef={thanksRef} submitted={submitted} formNeed={formNeed} setFormNeed={setFormNeed} message={message} setMessage={(value) => { setMessage(value); setPrefilled(false) }} formError={formError} onSubmit={submitForm} onReset={resetForm} />
    </main>
    <footer><div className="grid"><span className="l">© 2026 <span className="nw">Hanamaru Company Limited</span> · <span className="nw">花丸有限公司</span></span><span className="m" lang="en">Build it. Own it.</span><I18nText className="r" i18nKey="ft.proto">Prototype. Anything tagged PLACEHOLDER needs real content before launch.</I18nText></div></footer>
  </>
}

function Pricing({ onChoose }) {
  const models = [
    ['01', 'm1', 'Project', 'Fixed-scope build', 'from, per project', 'A clear scope and a fixed price, agreed before work starts. For new products, automations and modernisation.', ['Discovery and a written scope', 'Design, build and testing', 'Regular demos along the way', 'Full handover: code, docs, accounts'], 'new', 'Scope a project →'],
    ['02', 'm2', 'Monthly', 'SLA care plan', 'per month', 'Ongoing, SLA-backed care for systems that need to stay secure, current and improving. Often paired with a build.', ['SLA-backed maintenance and support', 'Security patches and upgrades', 'Hosting, monitoring and CI/CD', 'Ongoing features and fixes'], 'care', 'Ask about care plans →'],
    ['03', 'm3', 'Advisory', 'Fractional CTO', 'per day', 'Senior technical leadership without a full-time hire.', ['Technical strategy and roadmaps', 'Architecture reviews', 'Vendor and build-vs-buy decisions', 'Technical due diligence'], 'cto', 'Book a consultation →'],
  ]
  return <section className="sec" id="pricing"><div className="grid"><SectionHeading number="05" k="s5.h">Ways to work</SectionHeading><div className="big-wrap"><I18nText as="p" className="big" i18nKey="s5.big">Three ways to work together. <em>One rule: you own what we build.</em></I18nText><p className="lede"><span className="ph">Placeholder</span> <I18nText i18nKey="s5.note">All prices below are placeholders until real figures are confirmed.</I18nText></p></div><div className="models">{models.map(([number, key, kind, title, unit, description, items, need, cta]) => <article className="model" key={key}><p className="label"><span className="acc">{number}</span> · <I18nText i18nKey={`${key}.k`}>{kind}</I18nText></p><I18nText as="h3" i18nKey={`${key}.h`}>{title}</I18nText><p className="price">HK$[—]<I18nText as="small" i18nKey={`${key}.u`}>{unit}</I18nText></p><span className="ph">Placeholder price</span><I18nText as="p" className="desc" i18nKey={`${key}.d`}>{description}</I18nText><ul>{items.map((item, index) => <I18nText as="li" i18nKey={`${key}.${['a', 'b', 'c', 'e'][index]}`} key={item}>{item}</I18nText>)}</ul><I18nText as="a" className="btn" href="#contact" i18nKey={`${key}.cta`} onClick={() => onChoose(need)}>{cta}</I18nText></article>)}</div></div></section>
}

function Process() {
  const steps = [['Talk', 'Tell us what you need by email, on WhatsApp, or at our Cheung Sha Wan studio (by appointment).'], ['Scope', 'We write a clear scope, price and timeline, and agree them with you before any work starts.'], ['Build', "Regular demos you can click through, in a repository that's yours from day one."], ['Hand over', 'Code, documentation and accounts, transferred. Stay on a care plan or take it from there.']]
  return <section className="sec" id="process"><div className="grid"><SectionHeading number="06" k="s6.h">Process</SectionHeading><I18nText as="p" className="big" i18nKey="s6.big">Four steps. No surprises.</I18nText><ol className="tenets steps">{steps.map(([title, body], index) => <li key={title}><b>{String(index + 1).padStart(2, '0')}</b><I18nText as="h3" i18nKey={`p${index + 1}.h`}>{title}</I18nText><I18nText as="p" i18nKey={`p${index + 1}.p`}>{body}</I18nText></li>)}</ol></div></section>
}

function Faq() {
  const faqs = [
    ['Who owns the code?', "You do. The repository, documentation and cloud accounts are set up in your company's name, so you can keep working with us or hand everything to another team."],
    ['How much does a project cost?', "It depends on the scope. You'll get a clear, fixed price before any work starts. See the three ways to work above."],
    ['Can you take over an app someone else built?', 'Yes. We start with a review of the code and infrastructure, then suggest whether to fix, modernise or rebuild.'],
    ['What happens after launch?', "That's up to you. Stay on an SLA care plan for patches, upgrades and new features, or take the code and run it yourselves."],
    ['Do you work in Chinese?', "Yes. We're based in Hong Kong and work in English and Chinese."],
    ['Can I just message you on WhatsApp?', 'Of course: +852 5360 5900. Or email info@hanamaru-solutions.hk.'],
  ]
  return <section className="sec" id="faq"><div className="grid"><SectionHeading number="08" k="s8.h">Questions</SectionHeading><div className="faq">{faqs.map(([question, answer], index) => <details open={index === 0} key={question}><summary><b>{String(index + 1).padStart(2, '0')}</b><I18nText i18nKey={`f${index + 1}.q`}>{question}</I18nText></summary><div className="a"><I18nText as="p" i18nKey={`f${index + 1}.a`}>{answer}</I18nText>{index < 2 && <p><span className="ph">Placeholder</span> <I18nText i18nKey={`f${index + 1}.ph`}>{index ? 'Add real price ranges' : 'Confirm handover terms'}</I18nText></p>}</div></details>)}</div></div></section>
}

function Contact({ formRef, thanksRef, submitted, formNeed, setFormNeed, message, setMessage, formError, onSubmit, onReset }) {
  const { t } = useTranslation()
  return <section className="sec contact" id="contact"><div className="grid"><SectionHeading number="09" k="s9.h">Contact</SectionHeading><a className="mail" href="mailto:info@hanamaru-solutions.hk">info@hanamaru-<br />solutions.hk</a><div className="cgrid"><div><p className="label">WhatsApp</p><a href="https://wa.me/85253605900" target="_blank" rel="noopener">+852 5360 5900</a></div><div><I18nText as="p" className="label" i18nKey="ct.studio">Studio</I18nText><I18nText as="p" i18nKey="ct.addr">Por Mee Factory Building,<br />Cheung Sha Wan, Kowloon</I18nText><I18nText as="a" className="map" href="https://maps.app.goo.gl/TSFMhZpKgmmz31YXA" target="_blank" rel="noopener" i18nKey="ct.map">Map ↗</I18nText></div><div><I18nText as="p" className="label" i18nKey="ct.visits">Visits</I18nText><I18nText as="p" i18nKey="ct.appt">By appointment only</I18nText></div><div><I18nText as="p" className="label" i18nKey="ct.code">Code</I18nText><a href="https://github.com/hanamaru-hk" target="_blank" rel="noopener">github.com/hanamaru-hk</a></div></div>
    <div className="brief"><div className="brief-h"><I18nText as="h3" i18nKey="fm.h">Or send us a brief.</I18nText><I18nText as="p" i18nKey="fm.p">A few lines is enough. We'll reply by email or WhatsApp.</I18nText></div><div className="formbox">
      <form ref={formRef} noValidate hidden={submitted} onSubmit={onSubmit}><div className="frow"><label><I18nText className="label" i18nKey="fm.name">Name *</I18nText><input name="name" autoComplete="name" required /></label><label><I18nText className="label" i18nKey="fm.co">Company</I18nText><input name="company" autoComplete="organization" /></label></div><div className="frow"><label><I18nText className="label" i18nKey="fm.email">Email *</I18nText><input name="email" type="email" autoComplete="email" required /></label><label><I18nText className="label" i18nKey="fm.phone">WhatsApp / phone</I18nText><input name="phone" type="tel" autoComplete="tel" placeholder="+852" /></label></div>
        <label><I18nText className="label" i18nKey="fm.need">I need</I18nText><select name="need" value={formNeed} onChange={(event) => setFormNeed(event.target.value)}>{[['', 'nd.0', 'Choose one'], ['new', 'nd.new', 'A new product or system'], ['auto', 'nd.auto', 'Less manual work (automation, integrations, AI)'], ['old', 'nd.old', 'Fix or modernise an old system'], ['care', 'nd.care', 'An SLA care plan'], ['cto', 'nd.cto', 'Fractional CTO / advice'], ['other', 'nd.other', 'Something else']].map(([value, key, label]) => <I18nText as="option" value={value} i18nKey={key} key={value}>{label}</I18nText>)}</select></label>
        <label><I18nText className="label" i18nKey="fm.msg">About the project</I18nText><textarea name="message" rows="4" value={message} onChange={(event) => setMessage(event.target.value)} placeholder={t('fm.msg.ph', { defaultValue: 'What are you building, fixing or replacing?' })} /></label>{formError && <I18nText as="p" className="err" i18nKey="fm.err">Please add your name and a valid email address.</I18nText>}<div className="fend"><I18nText as="button" className="btn p" type="submit" i18nKey="fm.send">Send brief →</I18nText><span className="fnote"><span className="ph">Placeholder</span> <I18nText i18nKey="fm.note">Prototype: this form doesn't send anything yet.</I18nText></span></div>
      </form>
      <div className="thanks" ref={thanksRef} hidden={!submitted} tabIndex="-1"><I18nText as="p" className="label acc" i18nKey="th.k">Received</I18nText><I18nText as="h3" i18nKey="th.h">Thank you. We'll be in touch.</I18nText><I18nText as="p" i18nKey="th.p">If it's urgent, message us on WhatsApp at +852 5360 5900.</I18nText><I18nText as="button" className="btn w" type="button" i18nKey="th.again" onClick={onReset}>Send another</I18nText></div>
    </div></div>
  </div></section>
}

export default App

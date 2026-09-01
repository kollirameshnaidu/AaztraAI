import { Navigate, NavLink, Outlet, Route, Routes } from 'react-router-dom'

const industryLinks = [
  { to: '/industries/retail-cpg', label: 'Retail & CPG' },
  { to: '/industries/manufacturing', label: 'Manufacturing' },
  { to: '/industries/cross-industry', label: 'Cross-Industry' },
]

const companyLinks = [
  { href: '#', label: 'Leadership' },
  { href: '#', label: 'Blogs' },
  { href: '#', label: 'Careers' },
  { href: '#', label: 'Contact Us' },
]

const partnerStack = [
  'AWS',
  'Azure',
  'GCP',
  'Databricks',
  'Snowflake',
  'SAP',
  'Workday',
  'Salesforce',
  'Oracle NetSuite',
]

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/industries/retail-cpg" element={<RetailPage />} />
        <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
        <Route path="/industries/cross-industry" element={<CrossIndustryPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/how-we-work" element={<HowWeWorkPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

function SiteLayout() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-shell">
          <NavLink to="/" className="brand">
            AZTRA<span>AI</span>
          </NavLink>
          <nav className="main-nav">
            <div className="menu-group">
              <span className="menu-label">Industries</span>
              <div className="menu-panel">
                {industryLinks.map((item) => (
                  <NavLink key={item.to} to={item.to}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
            <NavLink to="/solutions">Solutions</NavLink>
            <NavLink to="/how-we-work">How We Work</NavLink>
            <div className="menu-group">
              <span className="menu-label">Company</span>
              <div className="menu-panel">
                {companyLinks.map((item) => (
                  <a key={item.label} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
          <a className="btn btn-outline" href="#contact-form">
            Book a 15-minute call
          </a>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>AZTRA AI</h3>
            <p>
              Intelligent orchestration between your systems and the decisions your team makes
              every day.
            </p>
          </div>
          <div>
            <h4>Industries</h4>
            <ul>
              {industryLinks.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Tech Partners</h4>
            <p className="partner-line">{partnerStack.join(' | ')}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

function PageHero({ title, subtitle, actions, label = 'Core Page' }) {
  return (
    <section className="hero-block">
      <div className="container">
        <span className="eyebrow">{label}</span>
        <h1>{title}</h1>
        <p className="hero-copy">{subtitle}</p>
        {actions ? <div className="button-row">{actions}</div> : null}
      </div>
    </section>
  )
}

function ContactForm({ ctaLabel }) {
  return (
    <form className="contact-form" id="contact-form">
      <h3>{ctaLabel}</h3>
      <div className="form-grid">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
      </div>
      <button type="button" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

function HomePage() {
  return (
    <>
      <PageHero
        label="Homepage"
        title="Your best people are making million-dollar calls on last week's data."
        subtitle="AZTRA builds the intelligent orchestration layer between the systems you already run and the decisions your team is trying to make. No rip and replace, just better decisions from the infrastructure you have already paid for."
        actions={
          <>
            <NavLink className="btn btn-primary" to="/industries/retail-cpg">
              Retail & CPG
            </NavLink>
            <NavLink className="btn btn-secondary" to="/industries/manufacturing">
              Manufacturing
            </NavLink>
          </>
        }
      />

      <section className="container section">
        <h2>Two industries we know cold.</h2>
        <div className="grid two">
          <article className="card">
            <h3>Retail & CPG</h3>
            <p>
              Demand planning, inventory, forecasting, and the signals your current systems cannot
              see.
            </p>
            <NavLink to="/industries/retail-cpg">See how AZTRA works for Retail and CPG</NavLink>
          </article>
          <article className="card">
            <h3>Manufacturing</h3>
            <p>
              Shop floor, maintenance, procurement, and the operational data trapped across
              disconnected systems.
            </p>
            <NavLink to="/industries/manufacturing">See how AZTRA works for Manufacturing</NavLink>
          </article>
        </div>
        <div className="strip">
          <p>Our roots are in retail and manufacturing. The problem we solve is not.</p>
          <NavLink to="/industries/cross-industry">
            Explore what AZTRA could do for your industry
          </NavLink>
        </div>
      </section>

      <section className="container section">
        <h2>Your team stays in control</h2>
        <div className="grid three">
          <article className="card">
            <h3>Your team stays in control</h3>
            <p>
              AZTRA does not replace judgment. It gives teams full context, scenario testing, and
              consequences before they commit.
            </p>
          </article>
          <article className="card">
            <h3>Built on what you already run</h3>
            <p>
              ERP, planning tools, CMMS, MES, and procurement systems stay in place while AZTRA
              connects and enriches them.
            </p>
          </article>
          <article className="card">
            <h3>Invested in your results</h3>
            <p>
              During discovery, we align on goals and, where possible, price around outcomes with
              skin in the game.
            </p>
          </article>
        </div>
      </section>

      <section className="container section">
        <h2>Focused set of solutions</h2>
        <div className="solution-pills">
          {['AURORA', 'Dovient', 'Luma', 'Aries', 'Nova'].map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
        <NavLink className="btn btn-secondary" to="/solutions">
          See all solutions
        </NavLink>
      </section>

      <section className="container section">
        <h2>Confidence signals</h2>
        <div className="grid three">
          <article className="stat-card">
            <strong>$350K</strong>
            <p>Annualized savings from failure avoidance for a steel tube manufacturer.</p>
          </article>
          <article className="stat-card">
            <strong>30-50%</strong>
            <p>Forecast accuracy improvement at SKU-store-week level for a global retailer.</p>
          </article>
          <article className="stat-card">
            <strong>28 days</strong>
            <p>Kickoff to live system for a steel manufacturer after a stalled transformation.</p>
          </article>
        </div>
        <p className="bridge-line">These results come from a simple, repeatable engagement model.</p>
        <p className="banner">Value in weeks, not months. See how we work.</p>
      </section>

      <section className="container section">
        <div className="strip">
          <p>
            Built by a team that has worked inside Oracle, Blue Yonder, NVIDIA, and Databricks,
            and inside the retail and manufacturing operations that run on them.
          </p>
        </div>
      </section>

      <section className="container section">
        <ContactForm ctaLabel="Start with a Readiness Assessment." />
      </section>
    </>
  )
}

function RetailPage() {
  return (
    <>
      <PageHero
        label="Retail & CPG"
        title="How many customers walked out without the size they came for?"
        subtitle="AURORA connects your ERP, inventory, ecommerce, POS, and planning systems, then enriches them with live external signals so teams can shape demand, not just react to it."
        actions={<ContactForm ctaLabel="See how AURORA can work on your data." />}
      />

      <section className="container section">
        <h2>Outcome numbers</h2>
        <div className="grid three">
          <article className="stat-card">
            <strong>30-50%</strong>
            <p>Forecast accuracy improvement at SKU, store, and week level.</p>
          </article>
          <article className="stat-card">
            <strong>20-35%</strong>
            <p>Reduction in split shipments and lower cost-to-serve.</p>
          </article>
          <article className="stat-card">
            <strong>3-7 points</strong>
            <p>Return rate reduction from better upstream decisions.</p>
          </article>
        </div>
      </section>

      <section className="container section">
        <h2>How AURORA works</h2>
        <div className="grid three">
          <article className="card">
            <h3>Connect</h3>
            <p>
              Bidirectional integration with existing systems means teams work in one environment
              instead of toggling between six.
            </p>
          </article>
          <article className="card">
            <h3>Correlate & Enrich</h3>
            <p>
              AURORA layers weather, social, event, and market signals onto internal data so
              planners see what is about to change.
            </p>
          </article>
          <article className="card">
            <h3>Decision Intelligence</h3>
            <p>
              AZTRA quantifies likely impact of pricing, allocation, and promotions with confidence
              metrics.
            </p>
          </article>
        </div>
      </section>

      <section className="container section">
        <h2>The cost of disconnected planning</h2>
        <div className="grid three">
          <article className="stat-card">
            <strong>$1.7T</strong>
            <p>Lost to global inventory distortion every year.</p>
          </article>
          <article className="stat-card">
            <strong>29%</strong>
            <p>Share of business apps that are actually integrated.</p>
          </article>
          <article className="stat-card">
            <strong>24-57%</strong>
            <p>Forecast lift when social/search signals are included.</p>
          </article>
        </div>
      </section>

      <section className="container section">
        <h2>Proof</h2>
        <div className="grid three">
          <article className="card">
            <h3>Demand Forecasting</h3>
            <p>30-50% forecast accuracy improvement for a global apparel retailer.</p>
          </article>
          <article className="card">
            <h3>Order Control</h3>
            <p>20-35% fewer split shipments and routing time cut from hours to minutes.</p>
          </article>
          <article className="card">
            <h3>Returns</h3>
            <p>3-7 point return rate reduction and 1-3 point margin lift.</p>
          </article>
        </div>
      </section>
    </>
  )
}

function ManufacturingPage() {
  return (
    <>
      <PageHero
        label="Manufacturing"
        title="Your best operator can hear a problem before your systems can see it."
        subtitle="AZTRA deploys Dovient across ERP, CMMS, MES, procurement, and legacy machine data so your team acts before failures become shutdowns."
        actions={<ContactForm ctaLabel="See what AZTRA could do in your plant." />}
      />

      <section className="container section">
        <h2>The cost of operating without foresight</h2>
        <div className="grid three">
          <article className="stat-card">
            <strong>$92B</strong>
            <p>Annual cost of human-error-related downtime in US manufacturing.</p>
          </article>
          <article className="stat-card">
            <strong>70%</strong>
            <p>Manufacturers citing poor systems integration as a key obstacle.</p>
          </article>
          <article className="stat-card">
            <strong>30-80%</strong>
            <p>Emergency MRO order premium compared to planned procurement.</p>
          </article>
        </div>
      </section>

      <section className="container section">
        <h2>How Dovient works</h2>
        <div className="grid three">
          <article className="card">
            <h3>Connect</h3>
            <p>
              Dovient integrates with ERPs, CMMS, MES, procurement tools, and legacy equipment
              without rip-and-replace.
            </p>
          </article>
          <article className="card">
            <h3>Correlate & Enrich</h3>
            <p>
              Captures SOP reality, expert troubleshooting paths, and plant patterns spread across
              teams and shifts.
            </p>
          </article>
          <article className="card">
            <h3>Decision Intelligence</h3>
            <p>
              Surfaces likely failures, maintenance windows, and part risks with confidence-based
              recommendations.
            </p>
          </article>
        </div>
      </section>

      <section className="container section">
        <h2>Case studies</h2>
        <div className="grid three">
          <article className="card">
            <h3>Spreadsheet Overload</h3>
            <p>$350K annualized savings and 45% MTTR reduction.</p>
          </article>
          <article className="card">
            <h3>Stalled Transformation</h3>
            <p>Live in 28 days after two years of vendor committee deadlock.</p>
          </article>
          <article className="card">
            <h3>Legacy Integration</h3>
            <p>40% integration overhead reduction with legacy machines in scope.</p>
          </article>
        </div>
      </section>
    </>
  )
}

function CrossIndustryPage() {
  return (
    <>
      <PageHero
        label="Cross-Industry"
        title="The surface problem changes by industry. The underlying failure mode usually doesn't."
        subtitle="Feed fragmented data into AI and you get polished confusion. AZTRA connects systems, enriches signals, and gives decision-makers a coherent operating picture."
      />

      <section className="container section">
        <h2>The patterns we see everywhere</h2>
        <div className="grid three">
          <article className="card">
            <h3>Scattered operational data</h3>
            <p>
              Data lives in five systems, none connected, and teams compensate with spreadsheets
              and institutional memory.
            </p>
          </article>
          <article className="card">
            <h3>Reactive decision-making</h3>
            <p>
              Reporting shows yesterday while decision windows close before teams can act on what
              changed.
            </p>
          </article>
          <article className="card">
            <h3>Accountability without visibility</h3>
            <p>
              People are held responsible for outcomes they cannot see clearly enough to control in
              time.
            </p>
          </article>
        </div>
      </section>

      <section className="container section">
        <h2>Product lenses beyond core verticals</h2>
        <div className="grid two">
          <article className="card">
            <h3>AURORA in healthcare</h3>
            <p>
              Demand sensing for patient volumes, capacity planning, and resource allocation where
              prediction quality directly impacts care operations.
            </p>
          </article>
          <article className="card">
            <h3>Dovient in pharma/med device</h3>
            <p>
              Knowledge capture and predictive maintenance in compliance-heavy operations with
              strict documentation requirements.
            </p>
          </article>
          <article className="card">
            <h3>Nova in finance</h3>
            <p>
              Consolidates fragmented customer and operational data into scenario modeling and
              stress-testing workflows.
            </p>
          </article>
        </div>
      </section>

      <section className="container section">
        <h2>Proof beyond core verticals</h2>
        <div className="grid two">
          <article className="card">
            <h3>Energy & Utility: Coal India</h3>
            <p>Closed-loop sustainability system across mining sites with SAP, SCADA, and DCS.</p>
          </article>
          <article className="card">
            <h3>Pharma: Dovient deployment</h3>
            <p>Onboarding time halved and zero FDA audit findings on maintenance docs.</p>
          </article>
          <article className="card">
            <h3>Financial Services: Regional Bank</h3>
            <p>Unified customer model in Snowflake and Salesforce for complete relationship view.</p>
          </article>
          <article className="card">
            <h3>B2B Tech: 7Signal</h3>
            <p>30-50% reduction in mid-funnel sales attrition and stronger forecast consistency.</p>
          </article>
        </div>
      </section>

      <section className="container section">
        <div className="thesis">
          <h2>The pattern underneath</h2>
          <p>
            Every company has systems and data, but not an orchestration layer that helps decision
            makers use both in time. AZTRA connects what exists, enriches what is missing, and
            gives teams a coherent decision environment.
          </p>
        </div>
      </section>

      <section className="container section">
        <ContactForm ctaLabel="If your operations share these patterns, we should talk." />
      </section>
    </>
  )
}

function SolutionsPage() {
  return (
    <>
      <PageHero
        label="Solutions"
        title="Each product below is how AZTRA's orchestration layer shows up in practice."
        subtitle="Some engagements use one product. Others combine products with custom engineering to fit your environment."
      />

      <section className="container section">
        <h2>Tier 1: Industry solutions</h2>
        <div className="grid two">
          <article className="card tier-one">
            <h3>AURORA: Retail & CPG</h3>
            <p>1-3 point gross margin improvement, 8-15% cost-to-serve savings, 20-35% split shipment reduction.</p>
            <NavLink to="/industries/retail-cpg">See how AURORA works for retail and CPG</NavLink>
          </article>
          <article className="card tier-one">
            <h3>Dovient: Manufacturing</h3>
            <p>$350K failure avoidance savings, 45% MTTR reduction, and 28-day go-live in stalled environments.</p>
            <NavLink to="/industries/manufacturing">See how Dovient works for manufacturing</NavLink>
          </article>
        </div>
      </section>

      <section className="container section">
        <h2>Tier 2: Business function solutions</h2>
        <div className="grid three">
          <article className="card">
            <h3>Luma</h3>
            <p>Incident resolution with 80% incident sync reduction, faster MTTR, and full auditability.</p>
          </article>
          <article className="card">
            <h3>Aries</h3>
            <p>Scriptless API testing with 40-60% testing time savings and reduced maintenance overhead.</p>
          </article>
          <article className="card">
            <h3>Nova</h3>
            <p>Decision intelligence for finance with scenario modeling and stress testing from ERP, sales, and HCM data.</p>
          </article>
        </div>
      </section>

      <section className="container section">
        <h2>Tier 3: Partnerships</h2>
        <div className="strip">
          <p>
            Need bespoke integration or development? AZTRA also delivers custom engineering for
            internal systems and client-facing applications.
          </p>
          <a href="#contact-form">Schedule a meeting</a>
        </div>
      </section>

      <section className="container section">
        <h2>Technology partners</h2>
        <p className="partner-line">{partnerStack.join(' | ')}</p>
      </section>

      <section className="container section">
        <ContactForm ctaLabel="Wondering where to start? Start with a Readiness Assessment." />
      </section>
    </>
  )
}

function HowWeWorkPage() {
  return (
    <>
      <PageHero
        label="How We Work"
        title="The last vendor said three months. It took fourteen."
        subtitle="AZTRA starts with a two-week assessment and reaches a working MVP in four weeks so you see value before committing further."
      />

      <section className="container section">
        <h2>What happens after the first call</h2>
        <div className="timeline">
          <article className="card">
            <h3>Phase 1: Assess</h3>
            <p>1-2 weeks, 4-8 hours of your team.</p>
            <p>Map systems, data flows, and decision points to identify quick wins and value pools.</p>
          </article>
          <article className="card">
            <h3>Phase 2: Plan</h3>
            <p>Delivered at end of assessment.</p>
            <p>A business value path that prioritizes use case, speed, and long-term scale.</p>
          </article>
          <article className="card">
            <h3>Phase 3: Prove (MVP)</h3>
            <p>Typically 4 weeks for AURORA or Dovient.</p>
            <p>One end-to-end use case in your data environment with measurable outcomes.</p>
          </article>
          <article className="card">
            <h3>Phase 4: Scale</h3>
            <p>After MVP buy-in.</p>
            <p>Expand scope from validated value rather than assumptions.</p>
          </article>
        </div>
      </section>

      <section className="container section">
        <h2>Where are you today?</h2>
        <div className="grid two">
          <article className="card">
            <h3>Stage 1</h3>
            <p>Our data is in five systems and none talk to each other.</p>
          </article>
          <article className="card">
            <h3>Stage 2</h3>
            <p>We can see what happened, but we are always reacting.</p>
          </article>
          <article className="card">
            <h3>Stage 3</h3>
            <p>We can predict what is coming, but cannot test what to do about it.</p>
          </article>
          <article className="card">
            <h3>Stage 4</h3>
            <p>We see it coming, test options, and act before impact hits.</p>
          </article>
        </div>
      </section>

      <section className="container section">
        <div className="thesis">
          <h2>AZTRA has skin in the game</h2>
          <p>
            Where possible, pricing ties to outcomes: improved margins, lower inventory costs, and
            time returned to your team.
          </p>
        </div>
      </section>

      <section className="container section">
        <ContactForm ctaLabel="Ready to find out where you stand? Start with a Readiness Assessment." />
        <p className="partner-line top-gap">{partnerStack.join(' | ')}</p>
      </section>
    </>
  )
}

export default App

import React from 'react'
import './ThePlatform.css'
import {
  LayoutDashboard, Users, ClipboardList, BookOpen, BarChart2,
  TrendingUp, Search, ChevronDown, MoreVertical, ArrowRight, Calendar, Bell, BookMarked, Star
} from 'lucide-react'

export default function ThePlatform() {
  return (
    <section className="platform chapter chapter--cream">
      <div className="platform__hero">
        {/* Eyebrow */}
        <div className="platform__eyebrow">
          <span className="platform__eyebrow-line" />
          <span className="platform__eyebrow-text">THE PLATFORM</span>
          <span className="platform__eyebrow-line" />
        </div>

        {/* Headline */}
        <h2 className="platform__headline">
          From insight to action.<br />
          <em>All in one place.</em>
        </h2>

        {/* Subtitle */}
        <p className="platform__sub">
          A single, connected platform to assess, engage, develop and measure your managers —<br />
          so you can drive real behavioural change at scale.
        </p>
      </div>

      {/* ── Dashboard mockup ── */}
      <div className="platform__mockup-wrap">
        {/* Background blobs */}
        <div className="platform__blob platform__blob--left" />
        <div className="platform__blob platform__blob--right" />

        <div className="platform__dashboard">

          {/* ── Sidebar ── */}
          <aside className="dash__sidebar">
            <div className="dash__logo">
              <div className="dash__logo-icon">
                <div className="dash__logo-grid">
                  <span /><span /><span /><span />
                </div>
              </div>
              <span className="dash__logo-name">Behavency</span>
            </div>

            <nav className="dash__nav">
              {[
                { icon: <LayoutDashboard size={16} />, label: 'Dashboard', active: true },
                { icon: <Users size={16} />, label: 'People' },
                { icon: <ClipboardList size={16} />, label: 'Assessments' },
                { icon: <BookOpen size={16} />, label: 'Development' },
                { icon: <BarChart2 size={16} />, label: 'Reports' },
              ].map(({ icon, label, active }) => (
                <div key={label} className={`dash__nav-item${active ? ' dash__nav-item--active' : ''}`}>
                  {icon}
                  <span>{label}</span>
                </div>
              ))}
            </nav>
          </aside>

          {/* ── Main content ── */}
          <main className="dash__main">

            {/* Top bar */}
            <div className="dash__topbar">
              <div className="dash__topbar-left">
                <h3 className="dash__programme-title">
                  Leadership Development Programme
                  <ChevronDown size={14} style={{ marginLeft: 6 }} />
                </h3>
                <p className="dash__programme-meta">35 managers &nbsp;|&nbsp; Jan – Dec 2026</p>
              </div>
              <div className="dash__topbar-right">
                <div className="dash__date-filter">
                  Jan – Dec 2026 <ChevronDown size={13} />
                </div>
                <div className="dash__avatar">JD</div>
                <ChevronDown size={13} style={{ color: '#94a3b8' }} />
              </div>
            </div>

            {/* Stat cards */}
            <div className="dash__stats">
              <div className="dash__stat">
                <div className="dash__stat-icon dash__stat-icon--blue">
                  <Users size={20} />
                </div>
                <div>
                  <div className="dash__stat-value">35</div>
                  <div className="dash__stat-label">Managers</div>
                  <div className="dash__stat-delta">
                    <TrendingUp size={11} /> +2 since last month
                  </div>
                </div>
              </div>
              <div className="dash__stat">
                <div className="dash__stat-icon dash__stat-icon--purple">
                  <BarChart2 size={20} />
                </div>
                <div>
                  <div className="dash__stat-value">24</div>
                  <div className="dash__stat-label">Development journeys</div>
                  <div className="dash__stat-note">70% on track</div>
                </div>
              </div>
              <div className="dash__stat">
                <div className="dash__stat-icon dash__stat-icon--green">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="dash__stat-value">+18%</div>
                  <div className="dash__stat-label">Behavioural improvement</div>
                  <div className="dash__stat-note">vs. baseline</div>
                </div>
              </div>
            </div>

            {/* Managers table + What's next */}
            <div className="dash__bottom">

              {/* Table */}
              <div className="dash__table-wrap">
                <div className="dash__table-header">
                  <span className="dash__table-title">Managers</span>
                  <div className="dash__table-controls">
                    <div className="dash__search">
                      <Search size={12} />
                      <span>Search managers...</span>
                    </div>
                    <div className="dash__filter">
                      All stages <ChevronDown size={12} />
                    </div>
                  </div>
                </div>

                <table className="dash__table">
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>STAGE</th>
                      <th>PROGRESS</th>
                      <th>STATUS</th>
                      <th>LAST ACTIVITY</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { initials:'FK', name:'Fredrick K.', role:'Operations Manager',    stage:'Development', pct:75, bar:'#3b82f6', status:'On track',       statusCls:'on-track',  ago:'2d ago' },
                      { initials:'SL', name:'Sofia L.',    role:'Marketing Manager',      stage:'Оценка',  pct:50, bar:'#3b82f6', status:'In progress',   statusCls:'in-prog',   ago:'1d ago' },
                      { initials:'HN', name:'Hanna N.',    role:'Product Development Lead',stage:'Engagement',  pct:20, bar:'#f59e0b', status:'Needs attention',statusCls:'needs-att', ago:'3d ago' },
                      { initials:'JG', name:'Jonas G.',    role:'Finance Manager',         stage:'Measurement', pct:90, bar:'#3b82f6', status:'On track',       statusCls:'on-track',  ago:'1d ago' },
                    ].map(row => (
                      <tr key={row.initials}>
                        <td>
                          <div className="dash__person">
                            <div className="dash__avatar-sm">{row.initials}</div>
                            <div>
                              <div className="dash__person-name">{row.name}</div>
                              <div className="dash__person-role">{row.role}</div>
                            </div>
                          </div>
                        </td>
                        <td><span className={`dash__stage dash__stage--${row.stage.toLowerCase()}`}>{row.stage}</span></td>
                        <td>
                          <div className="dash__progress-wrap">
                            <span className="dash__progress-pct">{row.pct}%</span>
                            <div className="dash__progress-bar">
                              <div className="dash__progress-fill" style={{ width: `${row.pct}%`, background: row.bar }} />
                            </div>
                          </div>
                        </td>
                        <td><span className={`dash__status dash__status--${row.statusCls}`}>{row.status}</span></td>
                        <td className="dash__ago">{row.ago}</td>
                        <td><MoreVertical size={14} style={{ color: '#cbd5e1' }} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="dash__table-footer">
                  <span>Showing 4 of 35 managers</span>
                  <a href="#" className="dash__view-all">View all managers <ArrowRight size={12} /></a>
                </div>
              </div>

              {/* What's next panel */}
              <div className="dash__whats-next">
                <div className="dash__wn-header">
                  <span className="dash__wn-title">What's next</span>
                  <a href="#" className="dash__wn-viewall">View all <ArrowRight size={11} /></a>
                </div>
                <ul className="dash__wn-list">
                  <li>
                    <div className="dash__wn-icon"><Calendar size={14} /></div>
                    <div>
                      <div className="dash__wn-item-title">3 interviews to schedule</div>
                      <div className="dash__wn-item-sub">Team Alpha, EU Senior Leaders</div>
                    </div>
                  </li>
                  <li>
                    <div className="dash__wn-icon"><Users size={14} /></div>
                    <div>
                      <div className="dash__wn-item-title">2 managers need attention</div>
                      <div className="dash__wn-item-sub">Haven't started for 14+ days</div>
                    </div>
                  </li>
                  <li>
                    <div className="dash__wn-icon"><Bell size={14} /></div>
                    <div>
                      <div className="dash__wn-item-title">New feedback available</div>
                      <div className="dash__wn-item-sub">5 managers, 360° results</div>
                    </div>
                  </li>
                  <li>
                    <div className="dash__wn-icon"><BookMarked size={14} /></div>
                    <div>
                      <div className="dash__wn-item-title">4 learning recommendations</div>
                      <div className="dash__wn-item-sub">Ready to assign</div>
                    </div>
                  </li>
                </ul>
                <div className="dash__wn-cta">
                  <div className="dash__wn-cta-icon"><TrendingUp size={16} /></div>
                  <div>
                    <div className="dash__wn-cta-title">Turn insight into impact.</div>
                    <div className="dash__wn-cta-sub">Track progress and see what's changing.</div>
                  </div>
                  <div className="dash__wn-cta-arrow"><ArrowRight size={14} /></div>
                </div>
              </div>

            </div>{/* end bottom */}
          </main>
        </div>{/* end dashboard */}
      </div>{/* end mockup-wrap */}
    </section>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { iconSize } from '../../../tokens/size'
import { getPublicAssetPath } from '../../../utils/getPublicAssetPath'
import {
  ArrowIcon,
  CallIcon,
} from '../../icons'

import {
  serviceColumns,
  footerMenuSections,
  standaloneMenus,
  companyInfoRows,
  appButtons,
  policyLinks,
  socialLinks,
  certList,
} from '../../../data/footerData'
import './Footer.scss'

const appIcon = '/images/footer/app-order-icon.svg'



function InactiveFooterLink({ children, className = '' }) {
  return (
    <Link to="#" className={className} onClick={(event) => event.preventDefault()}>
      {children}
    </Link>
  )
}

function FooterToggle({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className={`site-footer__toggle ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="site-footer__menu-button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {title}
        <ArrowIcon size={iconSize.xs} aria-hidden="true" />
      </button>
      <div className="site-footer__toggle-panel">
        <div className="site-footer__toggle-inner">{children}</div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__app">
        <div className="site-footer__app-head">
          <span className="site-footer__app-icon" aria-hidden="true">
            <img src={getPublicAssetPath(appIcon)} alt="" />
          </span>

        <div className="site-footer__app-copy">
          <strong>찾고 담고 바로 주문</strong>
          <p>재고 확인부터 주문까지 한 번에</p>
        </div>
      </div>

      <div className="site-footer__store-list" aria-label="앱 다운로드">
        {appButtons.map((button) => (
          <Link key={button.id} to="/store" className="site-footer__store-button">
            <img src={getPublicAssetPath(button.image)} alt={button.alt} />
            <span>
              <small>{button.label}</small>
              {button.store}
            </span>
          </Link>
          ))}
      </div>
      </div>

      <div className="site-footer__services">
        {serviceColumns.map((column) => (
          <section key={column.title} className="site-footer__service">
            <h2>
              <CallIcon size={iconSize.sm} aria-hidden="true" />
              {column.title}
            </h2>
            <p>{column.time}</p>
            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <Link to="/store">{link}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="site-footer__menus">
        {footerMenuSections.map((section) => (
          <FooterToggle key={section.title} title={section.title}>
            <ul className="site-footer__submenu">
              {section.links.map((link) => (
                <li key={link}>
                  <InactiveFooterLink>{link}</InactiveFooterLink>
                </li>
              ))}
            </ul>
          </FooterToggle>
        ))}
      </div>

      <div className="site-footer__quick-links">
        {standaloneMenus.map((menu) => (
          <InactiveFooterLink key={menu} className="site-footer__menu-button">
            {menu}
            <ArrowIcon size={iconSize.xs} aria-hidden="true" />
          </InactiveFooterLink>
        ))}
      </div>

      <div className="site-footer__social-list" aria-label="SNS 바로가기">
        {socialLinks.map(({ label, className, Icon }) => (
          <Link
            key={label}
            to="/store"
            className={`site-footer__social-link ${className}`}
            aria-label={label}
          >
            <Icon size={iconSize.lg} />
          </Link>
        ))}
      </div>

      <FooterToggle title="(주)아성다이소">
        <dl className="site-footer__company-info">
          {companyInfoRows.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>
                {value}
                {label === '사업자등록번호' && (
                  <InactiveFooterLink className="site-footer__business-link">
                    사업자 정보 확인
                  </InactiveFooterLink>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </FooterToggle>

      <div className="site-footer__info">
        <nav className="site-footer__policy-list" aria-label="약관 및 정책">
          {policyLinks.map((link) => (
            <Link
              key={link}
              to="/store"
              className={link.includes('개인정보') || link.includes('위치기반') ? 'is-strong' : ''}
            >
              {link}
            </Link>
          ))}
        </nav>
        <p>
          Tel : 1599-2211 <span aria-hidden="true">|</span> email :
          daisomall_help@daiso.co.kr
        </p>
        <div className="site-footer__cert-list" aria-label="인증마크">
          {certList.map((cert) => (
            <span key={cert.label} className="site-footer__cert">
              <img src={getPublicAssetPath(cert.image)} alt={cert.alt} />
              <span className="site-footer__cert-name">{cert.label}</span>
            </span>
          ))}
        </div>
      </div>

      <p className="site-footer__copy">Copyright (c) 2023 DAISO. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer

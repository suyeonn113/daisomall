import { useState } from 'react'
import { Link } from 'react-router-dom'
import { iconSize } from '../../../tokens/size'
import { getPublicAssetPath } from '../../../utils/getPublicAssetPath'
import {
  ArrowIcon,
  CallIcon,
  FacebookIcon,
  InstagramIcon,
  NaverBlogIcon,
  TiktokIcon,
  YoutubeIcon,
} from '../../icons'
import './Footer.scss'

const daisoLogo = '/icons/Daiso-logo.svg'

const appButtons = [
  { id: 'google-play', label: 'GET IT ON', store: 'Google Play' },
  { id: 'app-store', label: 'Download on the', store: 'App Store' },
]

const serviceColumns = [
  {
    title: '온라인 다이소몰',
    time: '평일 09:00 - 18:00',
    links: ['주문조회', '취소/교환/반품', '공지사항', 'FAQ', '1:1 문의', '앱 장애/신고'],
  },
  {
    title: '다이소 매장',
    time: '평일 09:00 - 18:00',
    links: ['매장 상품 찾기', '매장 위치 찾기', '1:1 문의', '고객센터', '제휴문의'],
  },
]

const footerMenuSections = [
  {
    title: '멤버십',
    links: ['멤버십 소개', '포인트 적립/사용내역', '포인트 선물하기', '멤버십 패밀리'],
  },
  {
    title: '회사소개',
    links: [
      '기업 소개',
      '국민가게, 다이소',
      '경영이념',
      '인재채용',
      '납품문의',
      '인테리어 업체 제휴문의',
      '가맹문의',
    ],
  },
]

const standaloneMenus = ['상품권', 'BIZ']

const companyInfoRows = [
  ['상호명 및 호스팅 서비스 제공', '(주)아성다이소'],
  ['대표', '김기호'],
  ['사업자등록번호', '213-81-52063'],
  ['통신판매신고번호', '2008-서울강남-1525'],
  ['주소', '서울특별시 강남구 남부순환로 2748 아성(A SUNG)'],
  ['개인정보 보호 책임자', '김범준'],
  ['청소년 보호 책임자', '조태진'],
]

const socialLinks = [
  { label: '네이버 블로그', className: 'is-blog', Icon: NaverBlogIcon },
  { label: '인스타그램', className: 'is-instagram', Icon: InstagramIcon },
  { label: '페이스북', className: 'is-facebook', Icon: FacebookIcon },
  { label: '유튜브', className: 'is-youtube', Icon: YoutubeIcon },
  { label: '틱톡', className: 'is-tiktok', Icon: TiktokIcon },
]

const policyLinks = [
  '이용약관',
  '위치기반서비스 이용약관',
  '청소년보호정책',
  '개인정보처리방침',
  '우리은행 구매안전 서비스',
]

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
        <span className="site-footer__app-icon" aria-hidden="true">
          <img src={getPublicAssetPath(daisoLogo)} alt="" />
        </span>
        <div className="site-footer__app-copy">
          <strong>찾고 담고 바로 주문</strong>
          <p>재고 확인부터 주문까지 한 번에</p>
          <div className="site-footer__store-list" aria-label="앱 다운로드">
            {appButtons.map((button) => (
              <Link key={button.id} to="/store" className="site-footer__store-button">
                <img src={getPublicAssetPath(daisoLogo)} alt="" />
                <span>
                  <small>{button.label}</small>
                  {button.store}
                </span>
              </Link>
            ))}
          </div>
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
          {['소비자중심', 'KMR', '위해상품 ZERO'].map((label) => (
            <span key={label} className="site-footer__cert">
              <img src={getPublicAssetPath(daisoLogo)} alt="" />
              {label}
            </span>
          ))}
        </div>
      </div>

      <p className="site-footer__copy">Copyright (c) 2023 DAISO. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer

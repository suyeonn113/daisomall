import './Footer.scss'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__app">
        <span className="site-footer__app-icon" />
        <div>
          <strong>Description Text Area</strong>
          <p>General Placeholder Text</p>
        </div>
      </div>
      <div className="site-footer__columns">
        <section>
          <h2>온라인 다이소몰</h2>
          <p>평일 09:00 - 18:00</p>
        </section>
        <section>
          <h2>다이소 매장</h2>
          <p>평일 09:00 - 18:00</p>
        </section>
      </div>
      <p className="site-footer__copy">Copyright (c) 2023 DAISO. All Rights Reserved</p>
    </footer>
  )
}

export default Footer

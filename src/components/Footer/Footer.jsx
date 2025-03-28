import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <img 
        src="/assets/logos/kasa-white.png" 
        alt="Kasa"
        className="footer-logo"
      />
      <p className="footer-copyright">
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}
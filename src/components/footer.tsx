import LogoSocials from "./logos-socials";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <h1>Mathias Vacher</h1>

        <LogoSocials />

        <div className="bottom-footer">
          <p>Copyright © {currentYear} Mathias Vacher. - Tous droits réservés.</p>
        </div>
      </div>


    </footer>
  );
}

export default Footer;

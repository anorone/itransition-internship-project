import { FormattedMessage } from "react-intl";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="footer__quote">
        <FormattedMessage id="footer.quote" />
      </p>
    </div>
  </footer>
);

export default Footer;
